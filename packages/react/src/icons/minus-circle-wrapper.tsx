import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MinusCircleIcon as RegularMinusCircleIcon } from './minus-circle';
import { MinusCircleIconDuotone as MinusCircleIconDuotone } from './minus-circle-duotone';
import { MinusCircleIconBold as MinusCircleIconBold } from './minus-circle-bold';
import { MinusCircleIconBoldDuotone as MinusCircleIconBoldDuotone } from './minus-circle-bold-duotone';
import { MinusCircleIconFill as MinusCircleIconFill } from './minus-circle-fill';
import { MinusCircleIconFillDuotone as MinusCircleIconFillDuotone } from './minus-circle-fill-duotone';

export interface MinusCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MinusCircleIcon = memo(forwardRef<SVGSVGElement, MinusCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MinusCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MinusCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MinusCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MinusCircleIconFill ref={ref} {...props} />;
  if (duotone) return <MinusCircleIconDuotone ref={ref} {...props} />;
  return <RegularMinusCircleIcon ref={ref} {...props} />;
}));

MinusCircleIcon.displayName = 'MinusCircleIcon';

export { MinusCircleIcon };
