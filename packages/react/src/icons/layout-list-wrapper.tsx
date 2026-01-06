import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayoutListIcon as RegularLayoutListIcon } from './layout-list';
import { LayoutListIconDuotone as LayoutListIconDuotone } from './layout-list-duotone';
import { LayoutListIconBold as LayoutListIconBold } from './layout-list-bold';
import { LayoutListIconBoldDuotone as LayoutListIconBoldDuotone } from './layout-list-bold-duotone';
import { LayoutListIconFill as LayoutListIconFill } from './layout-list-fill';
import { LayoutListIconFillDuotone as LayoutListIconFillDuotone } from './layout-list-fill-duotone';

export interface LayoutListIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LayoutListIcon = memo(forwardRef<SVGSVGElement, LayoutListIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayoutListIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LayoutListIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LayoutListIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LayoutListIconFill ref={ref} {...props} />;
  if (duotone) return <LayoutListIconDuotone ref={ref} {...props} />;
  return <RegularLayoutListIcon ref={ref} {...props} />;
}));

LayoutListIcon.displayName = 'LayoutListIcon';

export { LayoutListIcon };
