import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TriangleIcon as RegularTriangleIcon } from './triangle';
import { TriangleIconDuotone as TriangleIconDuotone } from './triangle-duotone';
import { TriangleIconBold as TriangleIconBold } from './triangle-bold';
import { TriangleIconBoldDuotone as TriangleIconBoldDuotone } from './triangle-bold-duotone';
import { TriangleIconFill as TriangleIconFill } from './triangle-fill';
import { TriangleIconFillDuotone as TriangleIconFillDuotone } from './triangle-fill-duotone';

export interface TriangleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TriangleIcon = memo(forwardRef<SVGSVGElement, TriangleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TriangleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TriangleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TriangleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TriangleIconFill ref={ref} {...props} />;
  if (duotone) return <TriangleIconDuotone ref={ref} {...props} />;
  return <RegularTriangleIcon ref={ref} {...props} />;
}));

TriangleIcon.displayName = 'TriangleIcon';

export { TriangleIcon };
