import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SquareIcon as RegularSquareIcon } from './square';
import { SquareIconDuotone as SquareIconDuotone } from './square-duotone';
import { SquareIconBold as SquareIconBold } from './square-bold';
import { SquareIconBoldDuotone as SquareIconBoldDuotone } from './square-bold-duotone';
import { SquareIconFill as SquareIconFill } from './square-fill';
import { SquareIconFillDuotone as SquareIconFillDuotone } from './square-fill-duotone';

export interface SquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SquareIcon = memo(forwardRef<SVGSVGElement, SquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SquareIconFill ref={ref} {...props} />;
  if (duotone) return <SquareIconDuotone ref={ref} {...props} />;
  return <RegularSquareIcon ref={ref} {...props} />;
}));

SquareIcon.displayName = 'SquareIcon';

export { SquareIcon };
