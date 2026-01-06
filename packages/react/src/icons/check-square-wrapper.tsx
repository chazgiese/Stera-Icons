import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CheckSquareIcon as RegularCheckSquareIcon } from './check-square';
import { CheckSquareIconDuotone as CheckSquareIconDuotone } from './check-square-duotone';
import { CheckSquareIconBold as CheckSquareIconBold } from './check-square-bold';
import { CheckSquareIconBoldDuotone as CheckSquareIconBoldDuotone } from './check-square-bold-duotone';
import { CheckSquareIconFill as CheckSquareIconFill } from './check-square-fill';
import { CheckSquareIconFillDuotone as CheckSquareIconFillDuotone } from './check-square-fill-duotone';

export interface CheckSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CheckSquareIcon = memo(forwardRef<SVGSVGElement, CheckSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CheckSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CheckSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CheckSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CheckSquareIconFill ref={ref} {...props} />;
  if (duotone) return <CheckSquareIconDuotone ref={ref} {...props} />;
  return <RegularCheckSquareIcon ref={ref} {...props} />;
}));

CheckSquareIcon.displayName = 'CheckSquareIcon';

export { CheckSquareIcon };
