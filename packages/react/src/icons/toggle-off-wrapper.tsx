import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ToggleOffIcon as ToggleOffIconRegular } from './toggle-off';
import { ToggleOffIconBold } from './toggle-off-bold';
import { ToggleOffIconFilled } from './toggle-off-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ToggleOffIconProps extends IconProps {
  variant?: IconVariant;
}

const ToggleOffIcon = memo(forwardRef<SVGSVGElement, ToggleOffIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ToggleOffIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ToggleOffIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ToggleOffIconRegular ref={ref} {...props} />;
  }
}));

ToggleOffIcon.displayName = 'ToggleOffIcon';

export { ToggleOffIcon };
