import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrowserIcon as BrowserIconRegular } from './browser';
import { BrowserIconBold } from './browser-bold';
import { BrowserIconFilled } from './browser-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <BrowserIconRegular ref={ref} {...props} />;
  }
}));

BrowserIcon.displayName = 'BrowserIcon';

export { BrowserIcon };
