import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WineBottleLabelIcon as WineBottleLabelIconRegular } from './wine-bottle-label';
import { WineBottleLabelIconBold } from './wine-bottle-label-bold';
import { WineBottleLabelIconFilled } from './wine-bottle-label-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface WineBottleLabelIconProps extends IconProps {
  variant?: IconVariant;
}

const WineBottleLabelIcon = memo(forwardRef<SVGSVGElement, WineBottleLabelIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <WineBottleLabelIconFilled ref={ref} {...props} />;
    case 'bold':
      return <WineBottleLabelIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <WineBottleLabelIconRegular ref={ref} {...props} />;
  }
}));

WineBottleLabelIcon.displayName = 'WineBottleLabelIcon';

export { WineBottleLabelIcon };
