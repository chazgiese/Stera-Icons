import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SparkleCircleIcon as SparkleCircleIconRegular } from './sparkle-circle';
import { SparkleCircleIconBold } from './sparkle-circle-bold';
import { SparkleCircleIconFilled } from './sparkle-circle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <SparkleCircleIconRegular ref={ref} {...props} />;
  }
}));

SparkleCircleIcon.displayName = 'SparkleCircleIcon';

export { SparkleCircleIcon };
