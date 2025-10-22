import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PercentIcon as PercentIconRegular } from './percent';
import { PercentIconBold } from './percent-bold';
import { PercentIconFilled } from './percent-filled';
import { PercentIconFilltone } from './percent-filltone';
import { PercentIconLinetone } from './percent-linetone';

export interface PercentIconProps extends IconProps {
  variant?: IconVariant;
}

const PercentIcon = memo(forwardRef<SVGSVGElement, PercentIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PercentIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PercentIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PercentIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PercentIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <PercentIconRegular ref={ref} {...props} />;
  }
}));

PercentIcon.displayName = 'PercentIcon';

export { PercentIcon };
