import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FortressIcon as FortressIconRegular } from './fortress';
import { FortressIconBold } from './fortress-bold';
import { FortressIconFilled } from './fortress-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface FortressIconProps extends IconProps {
  variant?: IconVariant;
}

const FortressIcon = memo(forwardRef<SVGSVGElement, FortressIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FortressIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FortressIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <FortressIconRegular ref={ref} {...props} />;
  }
}));

FortressIcon.displayName = 'FortressIcon';

export { FortressIcon };
