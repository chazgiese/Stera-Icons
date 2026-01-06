import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WineBottleLabelIcon as RegularWineBottleLabelIcon } from './wine-bottle-label';
import { WineBottleLabelIconDuotone as WineBottleLabelIconDuotone } from './wine-bottle-label-duotone';
import { WineBottleLabelIconBold as WineBottleLabelIconBold } from './wine-bottle-label-bold';
import { WineBottleLabelIconBoldDuotone as WineBottleLabelIconBoldDuotone } from './wine-bottle-label-bold-duotone';
import { WineBottleLabelIconFill as WineBottleLabelIconFill } from './wine-bottle-label-fill';
import { WineBottleLabelIconFillDuotone as WineBottleLabelIconFillDuotone } from './wine-bottle-label-fill-duotone';

export interface WineBottleLabelIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const WineBottleLabelIcon = memo(forwardRef<SVGSVGElement, WineBottleLabelIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <WineBottleLabelIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <WineBottleLabelIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <WineBottleLabelIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <WineBottleLabelIconFill ref={ref} {...props} />;
  if (duotone) return <WineBottleLabelIconDuotone ref={ref} {...props} />;
  return <RegularWineBottleLabelIcon ref={ref} {...props} />;
}));

WineBottleLabelIcon.displayName = 'WineBottleLabelIcon';

export { WineBottleLabelIcon };
