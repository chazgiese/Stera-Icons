import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BracketsCurlyIcon as RegularBracketsCurlyIcon } from './brackets-curly';
import { BracketsCurlyIconDuotone as BracketsCurlyIconDuotone } from './brackets-curly-duotone';
import { BracketsCurlyIconBold as BracketsCurlyIconBold } from './brackets-curly-bold';
import { BracketsCurlyIconBoldDuotone as BracketsCurlyIconBoldDuotone } from './brackets-curly-bold-duotone';
import { BracketsCurlyIconFill as BracketsCurlyIconFill } from './brackets-curly-fill';
import { BracketsCurlyIconFillDuotone as BracketsCurlyIconFillDuotone } from './brackets-curly-fill-duotone';

export interface BracketsCurlyIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BracketsCurlyIcon = memo(forwardRef<SVGSVGElement, BracketsCurlyIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BracketsCurlyIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BracketsCurlyIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BracketsCurlyIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BracketsCurlyIconFill ref={ref} {...props} />;
  if (duotone) return <BracketsCurlyIconDuotone ref={ref} {...props} />;
  return <RegularBracketsCurlyIcon ref={ref} {...props} />;
}));

BracketsCurlyIcon.displayName = 'BracketsCurlyIcon';

export { BracketsCurlyIcon };
