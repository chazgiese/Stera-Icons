import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BracketsCurlySquareIcon as RegularBracketsCurlySquareIcon } from './brackets-curly-square';
import { BracketsCurlySquareIconDuotone as BracketsCurlySquareIconDuotone } from './brackets-curly-square-duotone';
import { BracketsCurlySquareIconBold as BracketsCurlySquareIconBold } from './brackets-curly-square-bold';
import { BracketsCurlySquareIconBoldDuotone as BracketsCurlySquareIconBoldDuotone } from './brackets-curly-square-bold-duotone';
import { BracketsCurlySquareIconFill as BracketsCurlySquareIconFill } from './brackets-curly-square-fill';
import { BracketsCurlySquareIconFillDuotone as BracketsCurlySquareIconFillDuotone } from './brackets-curly-square-fill-duotone';

export interface BracketsCurlySquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BracketsCurlySquareIcon = memo(forwardRef<SVGSVGElement, BracketsCurlySquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BracketsCurlySquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BracketsCurlySquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BracketsCurlySquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BracketsCurlySquareIconFill ref={ref} {...props} />;
  if (duotone) return <BracketsCurlySquareIconDuotone ref={ref} {...props} />;
  return <RegularBracketsCurlySquareIcon ref={ref} {...props} />;
}));

BracketsCurlySquareIcon.displayName = 'BracketsCurlySquareIcon';

export { BracketsCurlySquareIcon };
