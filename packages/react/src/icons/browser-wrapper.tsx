import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BrowserIcon as BrowserIconRegular } from './browser';
import { BrowserIconBold } from './browser-bold';
import { BrowserIconFilled } from './browser-filled';
import { BrowserIconFilltone } from './browser-filltone';
import { BrowserIconLinetone } from './browser-linetone';

export interface BrowserIconProps extends IconProps {
  variant?: IconVariant;
}

const BrowserIcon = memo(forwardRef<SVGSVGElement, BrowserIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BrowserIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BrowserIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BrowserIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BrowserIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BrowserIconRegular ref={ref} {...props} />;
  }
}));

BrowserIcon.displayName = 'BrowserIcon';

export { BrowserIcon };
