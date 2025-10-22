import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SparkleCircleIcon as SparkleCircleIconRegular } from './sparkle-circle';
import { SparkleCircleIconBold } from './sparkle-circle-bold';
import { SparkleCircleIconFilled } from './sparkle-circle-filled';
import { SparkleCircleIconFilltone } from './sparkle-circle-filltone';
import { SparkleCircleIconLinetone } from './sparkle-circle-linetone';

export interface SparkleCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const SparkleCircleIcon = memo(forwardRef<SVGSVGElement, SparkleCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SparkleCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SparkleCircleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SparkleCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SparkleCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <SparkleCircleIconRegular ref={ref} {...props} />;
  }
}));

SparkleCircleIcon.displayName = 'SparkleCircleIcon';

export { SparkleCircleIcon };
