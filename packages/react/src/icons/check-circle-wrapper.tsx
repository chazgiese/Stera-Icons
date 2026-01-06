import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CheckCircleIcon as RegularCheckCircleIcon } from './check-circle';
import { CheckCircleIconDuotone as CheckCircleIconDuotone } from './check-circle-duotone';
import { CheckCircleIconBold as CheckCircleIconBold } from './check-circle-bold';
import { CheckCircleIconBoldDuotone as CheckCircleIconBoldDuotone } from './check-circle-bold-duotone';
import { CheckCircleIconFill as CheckCircleIconFill } from './check-circle-fill';
import { CheckCircleIconFillDuotone as CheckCircleIconFillDuotone } from './check-circle-fill-duotone';

export interface CheckCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CheckCircleIcon = memo(forwardRef<SVGSVGElement, CheckCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CheckCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CheckCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CheckCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CheckCircleIconFill ref={ref} {...props} />;
  if (duotone) return <CheckCircleIconDuotone ref={ref} {...props} />;
  return <RegularCheckCircleIcon ref={ref} {...props} />;
}));

CheckCircleIcon.displayName = 'CheckCircleIcon';

export { CheckCircleIcon };
