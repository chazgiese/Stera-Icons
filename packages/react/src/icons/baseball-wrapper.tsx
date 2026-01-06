import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BaseballIcon as RegularBaseballIcon } from './baseball';
import { BaseballIconDuotone as BaseballIconDuotone } from './baseball-duotone';
import { BaseballIconBold as BaseballIconBold } from './baseball-bold';
import { BaseballIconBoldDuotone as BaseballIconBoldDuotone } from './baseball-bold-duotone';
import { BaseballIconFill as BaseballIconFill } from './baseball-fill';
import { BaseballIconFillDuotone as BaseballIconFillDuotone } from './baseball-fill-duotone';

export interface BaseballIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BaseballIcon = memo(forwardRef<SVGSVGElement, BaseballIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BaseballIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BaseballIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BaseballIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BaseballIconFill ref={ref} {...props} />;
  if (duotone) return <BaseballIconDuotone ref={ref} {...props} />;
  return <RegularBaseballIcon ref={ref} {...props} />;
}));

BaseballIcon.displayName = 'BaseballIcon';

export { BaseballIcon };
