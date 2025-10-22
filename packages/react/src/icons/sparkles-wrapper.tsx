import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SparklesIcon as RegularSparklesIcon } from './sparkles';
import { SparklesIconBold } from './sparkles-bold';
import { SparklesIconFilled } from './sparkles-filled';
import { SparklesIconFilltone } from './sparkles-filltone';
import { SparklesIconLinetone } from './sparkles-linetone';

export interface SparklesIconProps extends IconProps {
  variant?: IconVariant;
}

const SparklesIcon = memo(forwardRef<SVGSVGElement, SparklesIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SparklesIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SparklesIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SparklesIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SparklesIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSparklesIcon ref={ref} {...props} />;
  }
}));

SparklesIcon.displayName = 'SparklesIcon';

export { SparklesIcon };
