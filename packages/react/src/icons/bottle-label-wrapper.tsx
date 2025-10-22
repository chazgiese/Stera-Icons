import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BottleLabelIcon as BottleLabelIconRegular } from './bottle-label';
import { BottleLabelIconBold } from './bottle-label-bold';
import { BottleLabelIconFilled } from './bottle-label-filled';
import { BottleLabelIconFilltone } from './bottle-label-filltone';
import { BottleLabelIconLinetone } from './bottle-label-linetone';

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
    case 'filltone':
      return <BottleLabelIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BottleLabelIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BottleLabelIconRegular ref={ref} {...props} />;
  }
}));

BottleLabelIcon.displayName = 'BottleLabelIcon';

export { BottleLabelIcon };
