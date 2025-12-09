import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { GavelIcon as RegularGavelIcon } from './gavel';
import { GavelIconBold } from './gavel-bold';
import { GavelIconFilled } from './gavel-filled';
import { GavelIconFilltone } from './gavel-filltone';
import { GavelIconLinetone } from './gavel-linetone';

export interface GavelIconProps extends IconProps {
  variant?: IconVariant;
}

const GavelIcon = memo(forwardRef<SVGSVGElement, GavelIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <GavelIconFilled ref={ref} {...props} />;
    case 'bold':
      return <GavelIconBold ref={ref} {...props} />;
    case 'filltone':
      return <GavelIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <GavelIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularGavelIcon ref={ref} {...props} />;
  }
}));

GavelIcon.displayName = 'GavelIcon';

export { GavelIcon };
