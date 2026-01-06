import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayoutGridPlusIcon as RegularLayoutGridPlusIcon } from './layout-grid-plus';
import { LayoutGridPlusIconDuotone as LayoutGridPlusIconDuotone } from './layout-grid-plus-duotone';
import { LayoutGridPlusIconBold as LayoutGridPlusIconBold } from './layout-grid-plus-bold';
import { LayoutGridPlusIconBoldDuotone as LayoutGridPlusIconBoldDuotone } from './layout-grid-plus-bold-duotone';
import { LayoutGridPlusIconFill as LayoutGridPlusIconFill } from './layout-grid-plus-fill';
import { LayoutGridPlusIconFillDuotone as LayoutGridPlusIconFillDuotone } from './layout-grid-plus-fill-duotone';

export interface LayoutGridPlusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LayoutGridPlusIcon = memo(forwardRef<SVGSVGElement, LayoutGridPlusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayoutGridPlusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LayoutGridPlusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LayoutGridPlusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LayoutGridPlusIconFill ref={ref} {...props} />;
  if (duotone) return <LayoutGridPlusIconDuotone ref={ref} {...props} />;
  return <RegularLayoutGridPlusIcon ref={ref} {...props} />;
}));

LayoutGridPlusIcon.displayName = 'LayoutGridPlusIcon';

export { LayoutGridPlusIcon };
