import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MoonCrescentIcon as MoonCrescentIconRegular } from './moon-crescent';
import { MoonCrescentIconBold } from './moon-crescent-bold';
import { MoonCrescentIconFilled } from './moon-crescent-filled';
import { MoonCrescentIconFilltone } from './moon-crescent-filltone';
import { MoonCrescentIconLinetone } from './moon-crescent-linetone';

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
    case 'filltone':
      return <MoonCrescentIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MoonCrescentIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <MoonCrescentIconRegular ref={ref} {...props} />;
  }
}));

MoonCrescentIcon.displayName = 'MoonCrescentIcon';

export { MoonCrescentIcon };
