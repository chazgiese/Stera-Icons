import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BracketsSquareIcon as RegularBracketsSquareIcon } from './brackets-square';
import { BracketsSquareIconDuotone as BracketsSquareIconDuotone } from './brackets-square-duotone';
import { BracketsSquareIconBold as BracketsSquareIconBold } from './brackets-square-bold';
import { BracketsSquareIconBoldDuotone as BracketsSquareIconBoldDuotone } from './brackets-square-bold-duotone';
import { BracketsSquareIconFill as BracketsSquareIconFill } from './brackets-square-fill';
import { BracketsSquareIconFillDuotone as BracketsSquareIconFillDuotone } from './brackets-square-fill-duotone';

export interface BracketsSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BracketsSquareIcon = memo(forwardRef<SVGSVGElement, BracketsSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BracketsSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BracketsSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BracketsSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BracketsSquareIconFill ref={ref} {...props} />;
  if (duotone) return <BracketsSquareIconDuotone ref={ref} {...props} />;
  return <RegularBracketsSquareIcon ref={ref} {...props} />;
}));

BracketsSquareIcon.displayName = 'BracketsSquareIcon';

export { BracketsSquareIcon };
