import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SparkleSquareIcon as SparkleSquareIconRegular } from './sparkle-square';
import { SparkleSquareIconBold } from './sparkle-square-bold';
import { SparkleSquareIconFilled } from './sparkle-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface SparkleSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const SparkleSquareIcon = memo(forwardRef<SVGSVGElement, SparkleSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SparkleSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SparkleSquareIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <SparkleSquareIconRegular ref={ref} {...props} />;
  }
}));

SparkleSquareIcon.displayName = 'SparkleSquareIcon';

export { SparkleSquareIcon };
