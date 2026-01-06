import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowerIcon as RegularFlowerIcon } from './flower';
import { FlowerIconDuotone as FlowerIconDuotone } from './flower-duotone';
import { FlowerIconBold as FlowerIconBold } from './flower-bold';
import { FlowerIconBoldDuotone as FlowerIconBoldDuotone } from './flower-bold-duotone';
import { FlowerIconFill as FlowerIconFill } from './flower-fill';
import { FlowerIconFillDuotone as FlowerIconFillDuotone } from './flower-fill-duotone';

export interface FlowerIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlowerIcon = memo(forwardRef<SVGSVGElement, FlowerIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowerIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlowerIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlowerIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlowerIconFill ref={ref} {...props} />;
  if (duotone) return <FlowerIconDuotone ref={ref} {...props} />;
  return <RegularFlowerIcon ref={ref} {...props} />;
}));

FlowerIcon.displayName = 'FlowerIcon';

export { FlowerIcon };
