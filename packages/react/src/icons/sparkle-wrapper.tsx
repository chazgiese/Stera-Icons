import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SparkleIcon as SparkleIconRegular } from './sparkle';
import { SparkleIconBold } from './sparkle-bold';
import { SparkleIconFilled } from './sparkle-filled';
import { SparkleIconFilltone } from './sparkle-filltone';
import { SparkleIconLinetone } from './sparkle-linetone';

export interface SparkleIconProps extends IconProps {
  variant?: IconVariant;
}

const SparkleIcon = memo(forwardRef<SVGSVGElement, SparkleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SparkleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SparkleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SparkleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SparkleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <SparkleIconRegular ref={ref} {...props} />;
  }
}));

SparkleIcon.displayName = 'SparkleIcon';

export { SparkleIcon };
