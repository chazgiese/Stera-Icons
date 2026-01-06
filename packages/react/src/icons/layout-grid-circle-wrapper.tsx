import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayoutGridCircleIcon as RegularLayoutGridCircleIcon } from './layout-grid-circle';
import { LayoutGridCircleIconDuotone as LayoutGridCircleIconDuotone } from './layout-grid-circle-duotone';
import { LayoutGridCircleIconBold as LayoutGridCircleIconBold } from './layout-grid-circle-bold';
import { LayoutGridCircleIconBoldDuotone as LayoutGridCircleIconBoldDuotone } from './layout-grid-circle-bold-duotone';
import { LayoutGridCircleIconFill as LayoutGridCircleIconFill } from './layout-grid-circle-fill';
import { LayoutGridCircleIconFillDuotone as LayoutGridCircleIconFillDuotone } from './layout-grid-circle-fill-duotone';

export interface LayoutGridCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LayoutGridCircleIcon = memo(forwardRef<SVGSVGElement, LayoutGridCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayoutGridCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LayoutGridCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LayoutGridCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LayoutGridCircleIconFill ref={ref} {...props} />;
  if (duotone) return <LayoutGridCircleIconDuotone ref={ref} {...props} />;
  return <RegularLayoutGridCircleIcon ref={ref} {...props} />;
}));

LayoutGridCircleIcon.displayName = 'LayoutGridCircleIcon';

export { LayoutGridCircleIcon };
