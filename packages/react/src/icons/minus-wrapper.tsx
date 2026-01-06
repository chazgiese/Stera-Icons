import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MinusIcon as RegularMinusIcon } from './minus';
import { MinusIconDuotone as MinusIconDuotone } from './minus-duotone';
import { MinusIconBold as MinusIconBold } from './minus-bold';
import { MinusIconBoldDuotone as MinusIconBoldDuotone } from './minus-bold-duotone';
import { MinusIconFill as MinusIconFill } from './minus-fill';
import { MinusIconFillDuotone as MinusIconFillDuotone } from './minus-fill-duotone';

export interface MinusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MinusIcon = memo(forwardRef<SVGSVGElement, MinusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MinusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MinusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MinusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MinusIconFill ref={ref} {...props} />;
  if (duotone) return <MinusIconDuotone ref={ref} {...props} />;
  return <RegularMinusIcon ref={ref} {...props} />;
}));

MinusIcon.displayName = 'MinusIcon';

export { MinusIcon };
