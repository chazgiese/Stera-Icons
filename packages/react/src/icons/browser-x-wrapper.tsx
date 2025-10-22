import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BrowserXIcon as BrowserXIconRegular } from './browser-x';
import { BrowserXIconBold } from './browser-x-bold';
import { BrowserXIconFilled } from './browser-x-filled';
import { BrowserXIconFilltone } from './browser-x-filltone';
import { BrowserXIconLinetone } from './browser-x-linetone';

export interface BrowserXIconProps extends IconProps {
  variant?: IconVariant;
}

const BrowserXIcon = memo(forwardRef<SVGSVGElement, BrowserXIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BrowserXIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BrowserXIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BrowserXIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BrowserXIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BrowserXIconRegular ref={ref} {...props} />;
  }
}));

BrowserXIcon.displayName = 'BrowserXIcon';

export { BrowserXIcon };
