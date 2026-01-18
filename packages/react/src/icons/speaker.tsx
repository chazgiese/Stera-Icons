import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SpeakerRegular } from './SpeakerRegular';
import { SpeakerRegularDuotone } from './SpeakerRegularDuotone';
import { SpeakerBold } from './SpeakerBold';
import { SpeakerBoldDuotone } from './SpeakerBoldDuotone';
import { SpeakerFill } from './SpeakerFill';
import { SpeakerFillDuotone } from './SpeakerFillDuotone';

export interface SpeakerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Speaker with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { SpeakerRegular } from 'stera-icons/SpeakerRegular';
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

export { Speaker };
