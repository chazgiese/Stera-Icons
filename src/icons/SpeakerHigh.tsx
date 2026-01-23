import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SpeakerHighRegular } from './SpeakerHighRegular.js';
import { SpeakerHighRegularDuotone } from './SpeakerHighRegularDuotone.js';
import { SpeakerHighBold } from './SpeakerHighBold.js';
import { SpeakerHighBoldDuotone } from './SpeakerHighBoldDuotone.js';
import { SpeakerHighFill } from './SpeakerHighFill.js';
import { SpeakerHighFillDuotone } from './SpeakerHighFillDuotone.js';

export interface SpeakerHighProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SpeakerHigh - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SpeakerHighRegular } from 'stera-icons/icons/SpeakerHighRegular';
 */
const SpeakerHigh = memo(forwardRef<SVGSVGElement, SpeakerHighProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SpeakerHighBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SpeakerHighBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SpeakerHighFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SpeakerHighFill ref={ref} {...rest} />;
  if (duotone) return <SpeakerHighRegularDuotone ref={ref} {...rest} />;
  return <SpeakerHighRegular ref={ref} {...rest} />;
}));

SpeakerHigh.displayName = 'SpeakerHigh';

// Triple export pattern (lucide-react style)
export { SpeakerHigh, SpeakerHigh as SpeakerHighIcon, SpeakerHigh as SiSpeakerHigh };
export default SpeakerHigh;
