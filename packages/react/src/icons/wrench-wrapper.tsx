import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { WrenchIcon as RegularWrenchIcon } from './wrench';
import { WrenchIconBold } from './wrench-bold';
import { WrenchIconFilled } from './wrench-filled';
import { WrenchIconFilltone } from './wrench-filltone';
import { WrenchIconLinetone } from './wrench-linetone';

export interface WrenchIconProps extends IconProps {
  variant?: IconVariant;
}

const WrenchIcon = memo(forwardRef<SVGSVGElement, WrenchIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <WrenchIconFilled ref={ref} {...props} />;
    case 'bold':
      return <WrenchIconBold ref={ref} {...props} />;
    case 'filltone':
      return <WrenchIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <WrenchIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularWrenchIcon ref={ref} {...props} />;
  }
}));

WrenchIcon.displayName = 'WrenchIcon';

export { WrenchIcon };
