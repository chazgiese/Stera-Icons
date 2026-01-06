import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BracketsSquareSquareIcon as RegularBracketsSquareSquareIcon } from './brackets-square-square';
import { BracketsSquareSquareIconDuotone as BracketsSquareSquareIconDuotone } from './brackets-square-square-duotone';
import { BracketsSquareSquareIconBold as BracketsSquareSquareIconBold } from './brackets-square-square-bold';
import { BracketsSquareSquareIconBoldDuotone as BracketsSquareSquareIconBoldDuotone } from './brackets-square-square-bold-duotone';
import { BracketsSquareSquareIconFill as BracketsSquareSquareIconFill } from './brackets-square-square-fill';
import { BracketsSquareSquareIconFillDuotone as BracketsSquareSquareIconFillDuotone } from './brackets-square-square-fill-duotone';

export interface BracketsSquareSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BracketsSquareSquareIcon = memo(forwardRef<SVGSVGElement, BracketsSquareSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BracketsSquareSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BracketsSquareSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BracketsSquareSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BracketsSquareSquareIconFill ref={ref} {...props} />;
  if (duotone) return <BracketsSquareSquareIconDuotone ref={ref} {...props} />;
  return <RegularBracketsSquareSquareIcon ref={ref} {...props} />;
}));

BracketsSquareSquareIcon.displayName = 'BracketsSquareSquareIcon';

export { BracketsSquareSquareIcon };
