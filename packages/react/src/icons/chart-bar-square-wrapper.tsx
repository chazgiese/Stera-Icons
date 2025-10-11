import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartBarSquareIcon as ChartBarSquareIconRegular } from './chart-bar-square';
import { ChartBarSquareIconBold } from './chart-bar-square-bold';
import { ChartBarSquareIconFilled } from './chart-bar-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChartBarSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartBarSquareIcon = memo(forwardRef<SVGSVGElement, ChartBarSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartBarSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartBarSquareIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChartBarSquareIconRegular ref={ref} {...props} />;
  }
}));

ChartBarSquareIcon.displayName = 'ChartBarSquareIcon';

export { ChartBarSquareIcon };
