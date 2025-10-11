import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BottleLabelIcon as BottleLabelIconRegular } from './bottle-label';
import { BottleLabelIconBold } from './bottle-label-bold';
import { BottleLabelIconFilled } from './bottle-label-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BottleLabelIconProps extends IconProps {
  variant?: IconVariant;
}

const BottleLabelIcon = memo(forwardRef<SVGSVGElement, BottleLabelIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BottleLabelIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BottleLabelIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BottleLabelIconRegular ref={ref} {...props} />;
  }
}));

BottleLabelIcon.displayName = 'BottleLabelIcon';

export { BottleLabelIcon };
