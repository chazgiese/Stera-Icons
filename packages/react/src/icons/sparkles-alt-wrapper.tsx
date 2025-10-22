import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SparklesAltIcon as SparklesAltIconRegular } from './sparkles-alt';
import { SparklesAltIconBold } from './sparkles-alt-bold';
import { SparklesAltIconFilled } from './sparkles-alt-filled';
import { SparklesAltIconFilltone } from './sparkles-alt-filltone';
import { SparklesAltIconLinetone } from './sparkles-alt-linetone';

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
    case 'filltone':
      return <SparklesAltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SparklesAltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <SparklesAltIconRegular ref={ref} {...props} />;
  }
}));

SparklesAltIcon.displayName = 'SparklesAltIcon';

export { SparklesAltIcon };
