import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WristWatchIcon as RegularWristWatchIcon } from './wrist-watch';
import { WristWatchIconDuotone as WristWatchIconDuotone } from './wrist-watch-duotone';
import { WristWatchIconBold as WristWatchIconBold } from './wrist-watch-bold';
import { WristWatchIconBoldDuotone as WristWatchIconBoldDuotone } from './wrist-watch-bold-duotone';
import { WristWatchIconFill as WristWatchIconFill } from './wrist-watch-fill';
import { WristWatchIconFillDuotone as WristWatchIconFillDuotone } from './wrist-watch-fill-duotone';

export interface WristWatchIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const WristWatchIcon = memo(forwardRef<SVGSVGElement, WristWatchIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <WristWatchIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <WristWatchIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <WristWatchIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <WristWatchIconFill ref={ref} {...props} />;
  if (duotone) return <WristWatchIconDuotone ref={ref} {...props} />;
  return <RegularWristWatchIcon ref={ref} {...props} />;
}));

WristWatchIcon.displayName = 'WristWatchIcon';

export { WristWatchIcon };
