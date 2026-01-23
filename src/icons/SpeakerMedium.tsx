import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SpeakerMediumRegular } from './SpeakerMediumRegular.js';
import { SpeakerMediumRegularDuotone } from './SpeakerMediumRegularDuotone.js';
import { SpeakerMediumBold } from './SpeakerMediumBold.js';
import { SpeakerMediumBoldDuotone } from './SpeakerMediumBoldDuotone.js';
import { SpeakerMediumFill } from './SpeakerMediumFill.js';
import { SpeakerMediumFillDuotone } from './SpeakerMediumFillDuotone.js';

export interface SpeakerMediumProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SpeakerMedium - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SpeakerMediumRegular } from 'stera-icons/icons/SpeakerMediumRegular';
 */
const SpeakerMedium = memo(forwardRef<SVGSVGElement, SpeakerMediumProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SpeakerMediumBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SpeakerMediumBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SpeakerMediumFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SpeakerMediumFill ref={ref} {...rest} />;
  if (duotone) return <SpeakerMediumRegularDuotone ref={ref} {...rest} />;
  return <SpeakerMediumRegular ref={ref} {...rest} />;
}));

SpeakerMedium.displayName = 'SpeakerMedium';

// Triple export pattern (lucide-react style)
export { SpeakerMedium, SpeakerMedium as SpeakerMediumIcon, SpeakerMedium as SiSpeakerMedium };
export default SpeakerMedium;
