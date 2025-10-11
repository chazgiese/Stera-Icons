import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EyeOffIcon as EyeOffIconRegular } from './eye-off';
import { EyeOffIconBold } from './eye-off-bold';
import { EyeOffIconFilled } from './eye-off-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface EyeOffIconProps extends IconProps {
  variant?: IconVariant;
}

const EyeOffIcon = memo(forwardRef<SVGSVGElement, EyeOffIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <EyeOffIconFilled ref={ref} {...props} />;
    case 'bold':
      return <EyeOffIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <EyeOffIconRegular ref={ref} {...props} />;
  }
}));

EyeOffIcon.displayName = 'EyeOffIcon';

export { EyeOffIcon };
