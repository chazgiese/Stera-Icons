import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SparklesAltIcon as SparklesAltIconRegular } from './sparkles-alt';
import { SparklesAltIconBold } from './sparkles-alt-bold';
import { SparklesAltIconFilled } from './sparkles-alt-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface SparklesAltIconProps extends IconProps {
  variant?: IconVariant;
}

const SparklesAltIcon = memo(forwardRef<SVGSVGElement, SparklesAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SparklesAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SparklesAltIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <SparklesAltIconRegular ref={ref} {...props} />;
  }
}));

SparklesAltIcon.displayName = 'SparklesAltIcon';

export { SparklesAltIcon };
