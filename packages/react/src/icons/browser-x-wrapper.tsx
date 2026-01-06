import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrowserXIcon as RegularBrowserXIcon } from './browser-x';
import { BrowserXIconDuotone as BrowserXIconDuotone } from './browser-x-duotone';
import { BrowserXIconBold as BrowserXIconBold } from './browser-x-bold';
import { BrowserXIconBoldDuotone as BrowserXIconBoldDuotone } from './browser-x-bold-duotone';
import { BrowserXIconFill as BrowserXIconFill } from './browser-x-fill';
import { BrowserXIconFillDuotone as BrowserXIconFillDuotone } from './browser-x-fill-duotone';

export interface BrowserXIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BrowserXIcon = memo(forwardRef<SVGSVGElement, BrowserXIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrowserXIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BrowserXIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BrowserXIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BrowserXIconFill ref={ref} {...props} />;
  if (duotone) return <BrowserXIconDuotone ref={ref} {...props} />;
  return <RegularBrowserXIcon ref={ref} {...props} />;
}));

BrowserXIcon.displayName = 'BrowserXIcon';

export { BrowserXIcon };
