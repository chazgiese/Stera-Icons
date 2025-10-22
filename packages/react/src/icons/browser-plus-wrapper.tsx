import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BrowserPlusIcon as BrowserPlusIconRegular } from './browser-plus';
import { BrowserPlusIconBold } from './browser-plus-bold';
import { BrowserPlusIconFilled } from './browser-plus-filled';
import { BrowserPlusIconFilltone } from './browser-plus-filltone';
import { BrowserPlusIconLinetone } from './browser-plus-linetone';

export interface BrowserPlusIconProps extends IconProps {
  variant?: IconVariant;
}

const BrowserPlusIcon = memo(forwardRef<SVGSVGElement, BrowserPlusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BrowserPlusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BrowserPlusIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BrowserPlusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BrowserPlusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BrowserPlusIconRegular ref={ref} {...props} />;
  }
}));

BrowserPlusIcon.displayName = 'BrowserPlusIcon';

export { BrowserPlusIcon };
