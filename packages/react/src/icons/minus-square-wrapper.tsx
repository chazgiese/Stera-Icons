import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MinusSquareIcon as RegularMinusSquareIcon } from './minus-square';
import { MinusSquareIconDuotone as MinusSquareIconDuotone } from './minus-square-duotone';
import { MinusSquareIconBold as MinusSquareIconBold } from './minus-square-bold';
import { MinusSquareIconBoldDuotone as MinusSquareIconBoldDuotone } from './minus-square-bold-duotone';
import { MinusSquareIconFill as MinusSquareIconFill } from './minus-square-fill';
import { MinusSquareIconFillDuotone as MinusSquareIconFillDuotone } from './minus-square-fill-duotone';

export interface MinusSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MinusSquareIcon = memo(forwardRef<SVGSVGElement, MinusSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MinusSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MinusSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MinusSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MinusSquareIconFill ref={ref} {...props} />;
  if (duotone) return <MinusSquareIconDuotone ref={ref} {...props} />;
  return <RegularMinusSquareIcon ref={ref} {...props} />;
}));

MinusSquareIcon.displayName = 'MinusSquareIcon';

export { MinusSquareIcon };
