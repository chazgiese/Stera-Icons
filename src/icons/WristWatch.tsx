import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { WristWatchRegular } from './WristWatchRegular.js';
import { WristWatchRegularDuotone } from './WristWatchRegularDuotone.js';
import { WristWatchBold } from './WristWatchBold.js';
import { WristWatchBoldDuotone } from './WristWatchBoldDuotone.js';
import { WristWatchFill } from './WristWatchFill.js';
import { WristWatchFillDuotone } from './WristWatchFillDuotone.js';

export interface WristWatchProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * WristWatch - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { WristWatchRegular } from 'stera-icons/icons/WristWatchRegular';
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

// Triple export pattern (lucide-react style)
export { WristWatch, WristWatch as WristWatchIcon, WristWatch as SiWristWatch };
export default WristWatch;
