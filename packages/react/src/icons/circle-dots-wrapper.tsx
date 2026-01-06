import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleDotsIcon as RegularCircleDotsIcon } from './circle-dots';
import { CircleDotsIconDuotone as CircleDotsIconDuotone } from './circle-dots-duotone';
import { CircleDotsIconBold as CircleDotsIconBold } from './circle-dots-bold';
import { CircleDotsIconBoldDuotone as CircleDotsIconBoldDuotone } from './circle-dots-bold-duotone';
import { CircleDotsIconFill as CircleDotsIconFill } from './circle-dots-fill';
import { CircleDotsIconFillDuotone as CircleDotsIconFillDuotone } from './circle-dots-fill-duotone';

export interface CircleDotsIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CircleDotsIcon = memo(forwardRef<SVGSVGElement, CircleDotsIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleDotsIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CircleDotsIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CircleDotsIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CircleDotsIconFill ref={ref} {...props} />;
  if (duotone) return <CircleDotsIconDuotone ref={ref} {...props} />;
  return <RegularCircleDotsIcon ref={ref} {...props} />;
}));

CircleDotsIcon.displayName = 'CircleDotsIcon';

export { CircleDotsIcon };
