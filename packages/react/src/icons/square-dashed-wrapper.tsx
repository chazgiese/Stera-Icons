import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SquareDashedIcon as RegularSquareDashedIcon } from './square-dashed';
import { SquareDashedIconDuotone as SquareDashedIconDuotone } from './square-dashed-duotone';
import { SquareDashedIconBold as SquareDashedIconBold } from './square-dashed-bold';
import { SquareDashedIconBoldDuotone as SquareDashedIconBoldDuotone } from './square-dashed-bold-duotone';
import { SquareDashedIconFill as SquareDashedIconFill } from './square-dashed-fill';
import { SquareDashedIconFillDuotone as SquareDashedIconFillDuotone } from './square-dashed-fill-duotone';

export interface SquareDashedIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SquareDashedIcon = memo(forwardRef<SVGSVGElement, SquareDashedIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SquareDashedIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SquareDashedIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SquareDashedIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SquareDashedIconFill ref={ref} {...props} />;
  if (duotone) return <SquareDashedIconDuotone ref={ref} {...props} />;
  return <RegularSquareDashedIcon ref={ref} {...props} />;
}));

SquareDashedIcon.displayName = 'SquareDashedIcon';

export { SquareDashedIcon };
