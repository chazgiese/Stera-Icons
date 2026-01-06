import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TriangleDownIcon as RegularTriangleDownIcon } from './triangle-down';
import { TriangleDownIconDuotone as TriangleDownIconDuotone } from './triangle-down-duotone';
import { TriangleDownIconBold as TriangleDownIconBold } from './triangle-down-bold';
import { TriangleDownIconBoldDuotone as TriangleDownIconBoldDuotone } from './triangle-down-bold-duotone';
import { TriangleDownIconFill as TriangleDownIconFill } from './triangle-down-fill';
import { TriangleDownIconFillDuotone as TriangleDownIconFillDuotone } from './triangle-down-fill-duotone';

export interface TriangleDownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TriangleDownIcon = memo(forwardRef<SVGSVGElement, TriangleDownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TriangleDownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TriangleDownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TriangleDownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TriangleDownIconFill ref={ref} {...props} />;
  if (duotone) return <TriangleDownIconDuotone ref={ref} {...props} />;
  return <RegularTriangleDownIcon ref={ref} {...props} />;
}));

TriangleDownIcon.displayName = 'TriangleDownIcon';

export { TriangleDownIcon };
