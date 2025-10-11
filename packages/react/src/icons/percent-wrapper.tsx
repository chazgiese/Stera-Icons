import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PercentIcon as PercentIconRegular } from './percent';
import { PercentIconBold } from './percent-bold';
import { PercentIconFilled } from './percent-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface PercentIconProps extends IconProps {
  variant?: IconVariant;
}

const PercentIcon = memo(forwardRef<SVGSVGElement, PercentIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PercentIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PercentIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <PercentIconRegular ref={ref} {...props} />;
  }
}));

PercentIcon.displayName = 'PercentIcon';

export { PercentIcon };
