import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SpeakerOffRegular } from './SpeakerOffRegular.js';
import { SpeakerOffRegularDuotone } from './SpeakerOffRegularDuotone.js';
import { SpeakerOffBold } from './SpeakerOffBold.js';
import { SpeakerOffBoldDuotone } from './SpeakerOffBoldDuotone.js';
import { SpeakerOffFill } from './SpeakerOffFill.js';
import { SpeakerOffFillDuotone } from './SpeakerOffFillDuotone.js';

export interface SpeakerOffProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SpeakerOff - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SpeakerOffRegular } from 'stera-icons/icons/SpeakerOffRegular';
 */
const SpeakerOff = memo(forwardRef<SVGSVGElement, SpeakerOffProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SpeakerOffBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SpeakerOffBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SpeakerOffFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SpeakerOffFill ref={ref} {...rest} />;
  if (duotone) return <SpeakerOffRegularDuotone ref={ref} {...rest} />;
  return <SpeakerOffRegular ref={ref} {...rest} />;
}));

SpeakerOff.displayName = 'SpeakerOff';

// Triple export pattern (lucide-react style)
export { SpeakerOff, SpeakerOff as SpeakerOffIcon, SpeakerOff as SiSpeakerOff };
export default SpeakerOff;
