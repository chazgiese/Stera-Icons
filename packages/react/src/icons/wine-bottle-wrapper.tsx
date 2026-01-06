import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WineBottleIcon as RegularWineBottleIcon } from './wine-bottle';
import { WineBottleIconDuotone as WineBottleIconDuotone } from './wine-bottle-duotone';
import { WineBottleIconBold as WineBottleIconBold } from './wine-bottle-bold';
import { WineBottleIconBoldDuotone as WineBottleIconBoldDuotone } from './wine-bottle-bold-duotone';
import { WineBottleIconFill as WineBottleIconFill } from './wine-bottle-fill';
import { WineBottleIconFillDuotone as WineBottleIconFillDuotone } from './wine-bottle-fill-duotone';

export interface WineBottleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const WineBottleIcon = memo(forwardRef<SVGSVGElement, WineBottleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <WineBottleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <WineBottleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <WineBottleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <WineBottleIconFill ref={ref} {...props} />;
  if (duotone) return <WineBottleIconDuotone ref={ref} {...props} />;
  return <RegularWineBottleIcon ref={ref} {...props} />;
}));

WineBottleIcon.displayName = 'WineBottleIcon';

export { WineBottleIcon };
