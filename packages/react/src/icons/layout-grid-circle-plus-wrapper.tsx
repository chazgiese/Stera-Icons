import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayoutGridCirclePlusIcon as RegularLayoutGridCirclePlusIcon } from './layout-grid-circle-plus';
import { LayoutGridCirclePlusIconDuotone as LayoutGridCirclePlusIconDuotone } from './layout-grid-circle-plus-duotone';
import { LayoutGridCirclePlusIconBold as LayoutGridCirclePlusIconBold } from './layout-grid-circle-plus-bold';
import { LayoutGridCirclePlusIconBoldDuotone as LayoutGridCirclePlusIconBoldDuotone } from './layout-grid-circle-plus-bold-duotone';
import { LayoutGridCirclePlusIconFill as LayoutGridCirclePlusIconFill } from './layout-grid-circle-plus-fill';
import { LayoutGridCirclePlusIconFillDuotone as LayoutGridCirclePlusIconFillDuotone } from './layout-grid-circle-plus-fill-duotone';

export interface LayoutGridCirclePlusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LayoutGridCirclePlusIcon = memo(forwardRef<SVGSVGElement, LayoutGridCirclePlusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayoutGridCirclePlusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LayoutGridCirclePlusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LayoutGridCirclePlusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LayoutGridCirclePlusIconFill ref={ref} {...props} />;
  if (duotone) return <LayoutGridCirclePlusIconDuotone ref={ref} {...props} />;
  return <RegularLayoutGridCirclePlusIcon ref={ref} {...props} />;
}));

LayoutGridCirclePlusIcon.displayName = 'LayoutGridCirclePlusIcon';

export { LayoutGridCirclePlusIcon };
