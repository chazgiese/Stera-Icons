import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayoutGridIcon as RegularLayoutGridIcon } from './layout-grid';
import { LayoutGridIconDuotone as LayoutGridIconDuotone } from './layout-grid-duotone';
import { LayoutGridIconBold as LayoutGridIconBold } from './layout-grid-bold';
import { LayoutGridIconBoldDuotone as LayoutGridIconBoldDuotone } from './layout-grid-bold-duotone';
import { LayoutGridIconFill as LayoutGridIconFill } from './layout-grid-fill';
import { LayoutGridIconFillDuotone as LayoutGridIconFillDuotone } from './layout-grid-fill-duotone';

export interface LayoutGridIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LayoutGridIcon = memo(forwardRef<SVGSVGElement, LayoutGridIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayoutGridIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LayoutGridIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LayoutGridIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LayoutGridIconFill ref={ref} {...props} />;
  if (duotone) return <LayoutGridIconDuotone ref={ref} {...props} />;
  return <RegularLayoutGridIcon ref={ref} {...props} />;
}));

LayoutGridIcon.displayName = 'LayoutGridIcon';

export { LayoutGridIcon };
