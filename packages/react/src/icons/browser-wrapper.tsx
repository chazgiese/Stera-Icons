import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrowserIcon as RegularBrowserIcon } from './browser';
import { BrowserIconDuotone as BrowserIconDuotone } from './browser-duotone';
import { BrowserIconBold as BrowserIconBold } from './browser-bold';
import { BrowserIconBoldDuotone as BrowserIconBoldDuotone } from './browser-bold-duotone';
import { BrowserIconFill as BrowserIconFill } from './browser-fill';
import { BrowserIconFillDuotone as BrowserIconFillDuotone } from './browser-fill-duotone';

export interface BrowserIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BrowserIcon = memo(forwardRef<SVGSVGElement, BrowserIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrowserIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BrowserIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BrowserIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BrowserIconFill ref={ref} {...props} />;
  if (duotone) return <BrowserIconDuotone ref={ref} {...props} />;
  return <RegularBrowserIcon ref={ref} {...props} />;
}));

BrowserIcon.displayName = 'BrowserIcon';

export { BrowserIcon };
