import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleIcon as RegularCircleIcon } from './circle';
import { CircleIconDuotone as CircleIconDuotone } from './circle-duotone';
import { CircleIconBold as CircleIconBold } from './circle-bold';
import { CircleIconBoldDuotone as CircleIconBoldDuotone } from './circle-bold-duotone';
import { CircleIconFill as CircleIconFill } from './circle-fill';
import { CircleIconFillDuotone as CircleIconFillDuotone } from './circle-fill-duotone';

export interface CircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CircleIcon = memo(forwardRef<SVGSVGElement, CircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CircleIconFill ref={ref} {...props} />;
  if (duotone) return <CircleIconDuotone ref={ref} {...props} />;
  return <RegularCircleIcon ref={ref} {...props} />;
}));

CircleIcon.displayName = 'CircleIcon';

export { CircleIcon };
