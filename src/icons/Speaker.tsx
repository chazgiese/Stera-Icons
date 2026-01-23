import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SpeakerRegular } from './SpeakerRegular.js';
import { SpeakerRegularDuotone } from './SpeakerRegularDuotone.js';
import { SpeakerBold } from './SpeakerBold.js';
import { SpeakerBoldDuotone } from './SpeakerBoldDuotone.js';
import { SpeakerFill } from './SpeakerFill.js';
import { SpeakerFillDuotone } from './SpeakerFillDuotone.js';

export interface SpeakerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Speaker - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SpeakerRegular } from 'stera-icons/icons/SpeakerRegular';
 */
const Speaker = memo(forwardRef<SVGSVGElement, SpeakerProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SpeakerBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SpeakerBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SpeakerFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SpeakerFill ref={ref} {...rest} />;
  if (duotone) return <SpeakerRegularDuotone ref={ref} {...rest} />;
  return <SpeakerRegular ref={ref} {...rest} />;
}));

Speaker.displayName = 'Speaker';

// Triple export pattern (lucide-react style)
export { Speaker, Speaker as SpeakerIcon, Speaker as SiSpeaker };
export default Speaker;
