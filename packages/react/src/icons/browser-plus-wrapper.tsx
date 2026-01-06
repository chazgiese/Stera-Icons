import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrowserPlusIcon as RegularBrowserPlusIcon } from './browser-plus';
import { BrowserPlusIconDuotone as BrowserPlusIconDuotone } from './browser-plus-duotone';
import { BrowserPlusIconBold as BrowserPlusIconBold } from './browser-plus-bold';
import { BrowserPlusIconBoldDuotone as BrowserPlusIconBoldDuotone } from './browser-plus-bold-duotone';
import { BrowserPlusIconFill as BrowserPlusIconFill } from './browser-plus-fill';
import { BrowserPlusIconFillDuotone as BrowserPlusIconFillDuotone } from './browser-plus-fill-duotone';

export interface BrowserPlusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BrowserPlusIcon = memo(forwardRef<SVGSVGElement, BrowserPlusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrowserPlusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BrowserPlusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BrowserPlusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BrowserPlusIconFill ref={ref} {...props} />;
  if (duotone) return <BrowserPlusIconDuotone ref={ref} {...props} />;
  return <RegularBrowserPlusIcon ref={ref} {...props} />;
}));

BrowserPlusIcon.displayName = 'BrowserPlusIcon';

export { BrowserPlusIcon };
