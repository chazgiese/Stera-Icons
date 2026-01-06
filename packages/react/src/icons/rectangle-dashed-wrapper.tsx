import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RectangleDashedIcon as RegularRectangleDashedIcon } from './rectangle-dashed';
import { RectangleDashedIconDuotone as RectangleDashedIconDuotone } from './rectangle-dashed-duotone';
import { RectangleDashedIconBold as RectangleDashedIconBold } from './rectangle-dashed-bold';
import { RectangleDashedIconBoldDuotone as RectangleDashedIconBoldDuotone } from './rectangle-dashed-bold-duotone';
import { RectangleDashedIconFill as RectangleDashedIconFill } from './rectangle-dashed-fill';
import { RectangleDashedIconFillDuotone as RectangleDashedIconFillDuotone } from './rectangle-dashed-fill-duotone';

export interface RectangleDashedIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const RectangleDashedIcon = memo(forwardRef<SVGSVGElement, RectangleDashedIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <RectangleDashedIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <RectangleDashedIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <RectangleDashedIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <RectangleDashedIconFill ref={ref} {...props} />;
  if (duotone) return <RectangleDashedIconDuotone ref={ref} {...props} />;
  return <RegularRectangleDashedIcon ref={ref} {...props} />;
}));

RectangleDashedIcon.displayName = 'RectangleDashedIcon';

export { RectangleDashedIcon };
