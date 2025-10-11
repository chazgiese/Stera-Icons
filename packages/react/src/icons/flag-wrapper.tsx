import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlagIcon as FlagIconRegular } from './flag';
import { FlagIconBold } from './flag-bold';
import { FlagIconFilled } from './flag-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface FlagIconProps extends IconProps {
  variant?: IconVariant;
}

const FlagIcon = memo(forwardRef<SVGSVGElement, FlagIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlagIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlagIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlagIconRegular ref={ref} {...props} />;
  }
}));

FlagIcon.displayName = 'FlagIcon';

export { FlagIcon };
