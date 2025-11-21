import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AtSignIcon as RegularAtSignIcon } from './at-sign';
import { AtSignIconBold } from './at-sign-bold';
import { AtSignIconFilled } from './at-sign-filled';
import { AtSignIconFilltone } from './at-sign-filltone';
import { AtSignIconLinetone } from './at-sign-linetone';

export interface AtSignIconProps extends IconProps {
  variant?: IconVariant;
}

const AtSignIcon = memo(forwardRef<SVGSVGElement, AtSignIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AtSignIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AtSignIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AtSignIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AtSignIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAtSignIcon ref={ref} {...props} />;
  }
}));

AtSignIcon.displayName = 'AtSignIcon';

export { AtSignIcon };
