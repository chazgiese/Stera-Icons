import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SpinnerIcon as SpinnerIconRegular } from './spinner';
import { SpinnerIconBold } from './spinner-bold';
import { SpinnerIconFilled } from './spinner-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface SpinnerIconProps extends IconProps {
  variant?: IconVariant;
}

const SpinnerIcon = memo(forwardRef<SVGSVGElement, SpinnerIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SpinnerIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SpinnerIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <SpinnerIconRegular ref={ref} {...props} />;
  }
}));

SpinnerIcon.displayName = 'SpinnerIcon';

export { SpinnerIcon };
