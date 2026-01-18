import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WristWatchRegular } from './WristWatchRegular';
import { WristWatchRegularDuotone } from './WristWatchRegularDuotone';
import { WristWatchBold } from './WristWatchBold';
import { WristWatchBoldDuotone } from './WristWatchBoldDuotone';
import { WristWatchFill } from './WristWatchFill';
import { WristWatchFillDuotone } from './WristWatchFillDuotone';

export interface WristWatchProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * WristWatch with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { WristWatchRegular } from 'stera-icons/WristWatchRegular';
 */
const WristWatch = memo(forwardRef<SVGSVGElement, WristWatchProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <WristWatchBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <WristWatchBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <WristWatchFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <WristWatchFill ref={ref} {...rest} />;
  if (duotone) return <WristWatchRegularDuotone ref={ref} {...rest} />;
  return <WristWatchRegular ref={ref} {...rest} />;
}));

WristWatch.displayName = 'WristWatch';

export { WristWatch };
