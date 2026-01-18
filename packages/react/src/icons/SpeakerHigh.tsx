import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SpeakerHighRegular } from './SpeakerHighRegular';
import { SpeakerHighRegularDuotone } from './SpeakerHighRegularDuotone';
import { SpeakerHighBold } from './SpeakerHighBold';
import { SpeakerHighBoldDuotone } from './SpeakerHighBoldDuotone';
import { SpeakerHighFill } from './SpeakerHighFill';
import { SpeakerHighFillDuotone } from './SpeakerHighFillDuotone';

export interface SpeakerHighProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SpeakerHigh with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { SpeakerHighRegular } from 'stera-icons/SpeakerHighRegular';
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

export { SpeakerHigh };
