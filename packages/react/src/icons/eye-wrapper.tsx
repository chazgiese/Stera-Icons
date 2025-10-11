import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EyeIcon as EyeIconRegular } from './eye';
import { EyeIconBold } from './eye-bold';
import { EyeIconFilled } from './eye-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface EyeIconProps extends IconProps {
  variant?: IconVariant;
}

const EyeIcon = memo(forwardRef<SVGSVGElement, EyeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <EyeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <EyeIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <EyeIconRegular ref={ref} {...props} />;
  }
}));

EyeIcon.displayName = 'EyeIcon';

export { EyeIcon };
