import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HashSquareIcon as RegularHashSquareIcon } from './hash-square';
import { HashSquareIconDuotone as HashSquareIconDuotone } from './hash-square-duotone';
import { HashSquareIconBold as HashSquareIconBold } from './hash-square-bold';
import { HashSquareIconBoldDuotone as HashSquareIconBoldDuotone } from './hash-square-bold-duotone';
import { HashSquareIconFill as HashSquareIconFill } from './hash-square-fill';
import { HashSquareIconFillDuotone as HashSquareIconFillDuotone } from './hash-square-fill-duotone';

export interface HashSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const HashSquareIcon = memo(forwardRef<SVGSVGElement, HashSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <HashSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <HashSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <HashSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <HashSquareIconFill ref={ref} {...props} />;
  if (duotone) return <HashSquareIconDuotone ref={ref} {...props} />;
  return <RegularHashSquareIcon ref={ref} {...props} />;
}));

HashSquareIcon.displayName = 'HashSquareIcon';

export { HashSquareIcon };
