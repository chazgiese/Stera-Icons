import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BladeSwordIcon as BladeSwordIconRegular } from './blade-sword';
import { BladeSwordIconBold } from './blade-sword-bold';
import { BladeSwordIconFilled } from './blade-sword-filled';
import { BladeSwordIconFilltone } from './blade-sword-filltone';
import { BladeSwordIconLinetone } from './blade-sword-linetone';

export interface BladeSwordIconProps extends IconProps {
  variant?: IconVariant;
}

const BladeSwordIcon = memo(forwardRef<SVGSVGElement, BladeSwordIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BladeSwordIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BladeSwordIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BladeSwordIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BladeSwordIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BladeSwordIconRegular ref={ref} {...props} />;
  }
}));

BladeSwordIcon.displayName = 'BladeSwordIcon';

export { BladeSwordIcon };
