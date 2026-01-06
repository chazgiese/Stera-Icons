import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RectangleIcon as RegularRectangleIcon } from './rectangle';
import { RectangleIconDuotone as RectangleIconDuotone } from './rectangle-duotone';
import { RectangleIconBold as RectangleIconBold } from './rectangle-bold';
import { RectangleIconBoldDuotone as RectangleIconBoldDuotone } from './rectangle-bold-duotone';
import { RectangleIconFill as RectangleIconFill } from './rectangle-fill';
import { RectangleIconFillDuotone as RectangleIconFillDuotone } from './rectangle-fill-duotone';

export interface RectangleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const RectangleIcon = memo(forwardRef<SVGSVGElement, RectangleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <RectangleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <RectangleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <RectangleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <RectangleIconFill ref={ref} {...props} />;
  if (duotone) return <RectangleIconDuotone ref={ref} {...props} />;
  return <RegularRectangleIcon ref={ref} {...props} />;
}));

RectangleIcon.displayName = 'RectangleIcon';

export { RectangleIcon };
