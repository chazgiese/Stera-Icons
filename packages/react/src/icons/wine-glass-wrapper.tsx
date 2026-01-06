import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WineGlassIcon as RegularWineGlassIcon } from './wine-glass';
import { WineGlassIconDuotone as WineGlassIconDuotone } from './wine-glass-duotone';
import { WineGlassIconBold as WineGlassIconBold } from './wine-glass-bold';
import { WineGlassIconBoldDuotone as WineGlassIconBoldDuotone } from './wine-glass-bold-duotone';
import { WineGlassIconFill as WineGlassIconFill } from './wine-glass-fill';
import { WineGlassIconFillDuotone as WineGlassIconFillDuotone } from './wine-glass-fill-duotone';

export interface WineGlassIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const WineGlassIcon = memo(forwardRef<SVGSVGElement, WineGlassIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <WineGlassIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <WineGlassIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <WineGlassIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <WineGlassIconFill ref={ref} {...props} />;
  if (duotone) return <WineGlassIconDuotone ref={ref} {...props} />;
  return <RegularWineGlassIcon ref={ref} {...props} />;
}));

WineGlassIcon.displayName = 'WineGlassIcon';

export { WineGlassIcon };
