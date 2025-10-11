import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PercentCircleIcon as PercentCircleIconRegular } from './percent-circle';
import { PercentCircleIconBold } from './percent-circle-bold';
import { PercentCircleIconFilled } from './percent-circle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface PercentCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const PercentCircleIcon = memo(forwardRef<SVGSVGElement, PercentCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PercentCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PercentCircleIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <PercentCircleIconRegular ref={ref} {...props} />;
  }
}));

PercentCircleIcon.displayName = 'PercentCircleIcon';

export { PercentCircleIcon };
