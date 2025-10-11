import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SparklesIcon as SparklesIconRegular } from './sparkles';
import { SparklesIconBold } from './sparkles-bold';
import { SparklesIconFilled } from './sparkles-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <SparklesIconRegular ref={ref} {...props} />;
  }
}));

SparklesIcon.displayName = 'SparklesIcon';

export { SparklesIcon };
