import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoonCrescentIcon as MoonCrescentIconRegular } from './moon-crescent';
import { MoonCrescentIconBold } from './moon-crescent-bold';
import { MoonCrescentIconFilled } from './moon-crescent-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface MoonCrescentIconProps extends IconProps {
  variant?: IconVariant;
}

const MoonCrescentIcon = memo(forwardRef<SVGSVGElement, MoonCrescentIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MoonCrescentIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MoonCrescentIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <MoonCrescentIconRegular ref={ref} {...props} />;
  }
}));

MoonCrescentIcon.displayName = 'MoonCrescentIcon';

export { MoonCrescentIcon };
