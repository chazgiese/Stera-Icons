import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PercentSquareIcon as PercentSquareIconRegular } from './percent-square';
import { PercentSquareIconBold } from './percent-square-bold';
import { PercentSquareIconFilled } from './percent-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface PercentSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const PercentSquareIcon = memo(forwardRef<SVGSVGElement, PercentSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PercentSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PercentSquareIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <PercentSquareIconRegular ref={ref} {...props} />;
  }
}));

PercentSquareIcon.displayName = 'PercentSquareIcon';

export { PercentSquareIcon };
