import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrowserPlusIcon as BrowserPlusIconRegular } from './browser-plus';
import { BrowserPlusIconBold } from './browser-plus-bold';
import { BrowserPlusIconFilled } from './browser-plus-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <BrowserPlusIconRegular ref={ref} {...props} />;
  }
}));

BrowserPlusIcon.displayName = 'BrowserPlusIcon';

export { BrowserPlusIcon };
