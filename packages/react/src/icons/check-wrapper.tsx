import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CheckIcon as CheckIconRegular } from './check';
import { CheckIconBold } from './check-bold';
import { CheckIconFilled } from './check-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CheckIconProps extends IconProps {
  variant?: IconVariant;
}

const CheckIcon = memo(forwardRef<SVGSVGElement, CheckIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CheckIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CheckIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CheckIconRegular ref={ref} {...props} />;
  }
}));

CheckIcon.displayName = 'CheckIcon';

export { CheckIcon };
