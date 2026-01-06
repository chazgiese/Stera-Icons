import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BracketsSquareCircleIcon as RegularBracketsSquareCircleIcon } from './brackets-square-circle';
import { BracketsSquareCircleIconDuotone as BracketsSquareCircleIconDuotone } from './brackets-square-circle-duotone';
import { BracketsSquareCircleIconBold as BracketsSquareCircleIconBold } from './brackets-square-circle-bold';
import { BracketsSquareCircleIconBoldDuotone as BracketsSquareCircleIconBoldDuotone } from './brackets-square-circle-bold-duotone';
import { BracketsSquareCircleIconFill as BracketsSquareCircleIconFill } from './brackets-square-circle-fill';
import { BracketsSquareCircleIconFillDuotone as BracketsSquareCircleIconFillDuotone } from './brackets-square-circle-fill-duotone';

export interface BracketsSquareCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BracketsSquareCircleIcon = memo(forwardRef<SVGSVGElement, BracketsSquareCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BracketsSquareCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BracketsSquareCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BracketsSquareCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BracketsSquareCircleIconFill ref={ref} {...props} />;
  if (duotone) return <BracketsSquareCircleIconDuotone ref={ref} {...props} />;
  return <RegularBracketsSquareCircleIcon ref={ref} {...props} />;
}));

BracketsSquareCircleIcon.displayName = 'BracketsSquareCircleIcon';

export { BracketsSquareCircleIcon };
