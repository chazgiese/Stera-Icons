import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SpeakerLowRegular } from './SpeakerLowRegular';
import { SpeakerLowRegularDuotone } from './SpeakerLowRegularDuotone';
import { SpeakerLowBold } from './SpeakerLowBold';
import { SpeakerLowBoldDuotone } from './SpeakerLowBoldDuotone';
import { SpeakerLowFill } from './SpeakerLowFill';
import { SpeakerLowFillDuotone } from './SpeakerLowFillDuotone';

export interface SpeakerLowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SpeakerLow with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { SpeakerLowRegular } from 'stera-icons/SpeakerLowRegular';
 */
const SpeakerLow = memo(forwardRef<SVGSVGElement, SpeakerLowProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SpeakerLowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SpeakerLowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SpeakerLowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SpeakerLowFill ref={ref} {...rest} />;
  if (duotone) return <SpeakerLowRegularDuotone ref={ref} {...rest} />;
  return <SpeakerLowRegular ref={ref} {...rest} />;
}));

SpeakerLow.displayName = 'SpeakerLow';

export { SpeakerLow };
