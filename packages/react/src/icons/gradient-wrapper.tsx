import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GradientIcon as RegularGradientIcon } from './gradient';
import { GradientIconDuotone as GradientIconDuotone } from './gradient-duotone';
import { GradientIconBold as GradientIconBold } from './gradient-bold';
import { GradientIconBoldDuotone as GradientIconBoldDuotone } from './gradient-bold-duotone';
import { GradientIconFill as GradientIconFill } from './gradient-fill';
import { GradientIconFillDuotone as GradientIconFillDuotone } from './gradient-fill-duotone';

export interface GradientIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GradientIcon = memo(forwardRef<SVGSVGElement, GradientIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GradientIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GradientIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GradientIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GradientIconFill ref={ref} {...props} />;
  if (duotone) return <GradientIconDuotone ref={ref} {...props} />;
  return <RegularGradientIcon ref={ref} {...props} />;
}));

GradientIcon.displayName = 'GradientIcon';

export { GradientIcon };
