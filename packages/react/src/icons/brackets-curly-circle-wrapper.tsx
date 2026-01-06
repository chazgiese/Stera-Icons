import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BracketsCurlyCircleIcon as RegularBracketsCurlyCircleIcon } from './brackets-curly-circle';
import { BracketsCurlyCircleIconDuotone as BracketsCurlyCircleIconDuotone } from './brackets-curly-circle-duotone';
import { BracketsCurlyCircleIconBold as BracketsCurlyCircleIconBold } from './brackets-curly-circle-bold';
import { BracketsCurlyCircleIconBoldDuotone as BracketsCurlyCircleIconBoldDuotone } from './brackets-curly-circle-bold-duotone';
import { BracketsCurlyCircleIconFill as BracketsCurlyCircleIconFill } from './brackets-curly-circle-fill';
import { BracketsCurlyCircleIconFillDuotone as BracketsCurlyCircleIconFillDuotone } from './brackets-curly-circle-fill-duotone';

export interface BracketsCurlyCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BracketsCurlyCircleIcon = memo(forwardRef<SVGSVGElement, BracketsCurlyCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BracketsCurlyCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BracketsCurlyCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BracketsCurlyCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BracketsCurlyCircleIconFill ref={ref} {...props} />;
  if (duotone) return <BracketsCurlyCircleIconDuotone ref={ref} {...props} />;
  return <RegularBracketsCurlyCircleIcon ref={ref} {...props} />;
}));

BracketsCurlyCircleIcon.displayName = 'BracketsCurlyCircleIcon';

export { BracketsCurlyCircleIcon };
