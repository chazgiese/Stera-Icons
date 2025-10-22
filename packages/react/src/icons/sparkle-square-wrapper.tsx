import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SparkleSquareIcon as RegularSparkleSquareIcon } from './sparkle-square';
import { SparkleSquareIconBold } from './sparkle-square-bold';
import { SparkleSquareIconFilled } from './sparkle-square-filled';
import { SparkleSquareIconFilltone } from './sparkle-square-filltone';
import { SparkleSquareIconLinetone } from './sparkle-square-linetone';

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
    case 'filltone':
      return <SparkleSquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SparkleSquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSparkleSquareIcon ref={ref} {...props} />;
  }
}));

SparkleSquareIcon.displayName = 'SparkleSquareIcon';

export { SparkleSquareIcon };
