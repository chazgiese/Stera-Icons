import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CheckIcon as RegularCheckIcon } from './check';
import { CheckIconDuotone as CheckIconDuotone } from './check-duotone';
import { CheckIconBold as CheckIconBold } from './check-bold';
import { CheckIconBoldDuotone as CheckIconBoldDuotone } from './check-bold-duotone';
import { CheckIconFill as CheckIconFill } from './check-fill';
import { CheckIconFillDuotone as CheckIconFillDuotone } from './check-fill-duotone';

export interface CheckIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CheckIcon = memo(forwardRef<SVGSVGElement, CheckIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CheckIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CheckIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CheckIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CheckIconFill ref={ref} {...props} />;
  if (duotone) return <CheckIconDuotone ref={ref} {...props} />;
  return <RegularCheckIcon ref={ref} {...props} />;
}));

CheckIcon.displayName = 'CheckIcon';

export { CheckIcon };
