import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PeaceIcon as RegularPeaceIcon } from './peace';
import { PeaceIconBold } from './peace-bold';
import { PeaceIconFilled } from './peace-filled';
import { PeaceIconFilltone } from './peace-filltone';
import { PeaceIconLinetone } from './peace-linetone';

export interface PeaceIconProps extends IconProps {
  variant?: IconVariant;
}

const PeaceIcon = memo(forwardRef<SVGSVGElement, PeaceIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PeaceIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PeaceIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PeaceIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PeaceIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPeaceIcon ref={ref} {...props} />;
  }
}));

PeaceIcon.displayName = 'PeaceIcon';

export { PeaceIcon };
