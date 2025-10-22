import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PercentSquareIcon as PercentSquareIconRegular } from './percent-square';
import { PercentSquareIconBold } from './percent-square-bold';
import { PercentSquareIconFilled } from './percent-square-filled';
import { PercentSquareIconFilltone } from './percent-square-filltone';
import { PercentSquareIconLinetone } from './percent-square-linetone';

export interface PercentSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const PercentSquareIcon = memo(forwardRef<SVGSVGElement, PercentSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PercentSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PercentSquareIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PercentSquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PercentSquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <PercentSquareIconRegular ref={ref} {...props} />;
  }
}));

PercentSquareIcon.displayName = 'PercentSquareIcon';

export { PercentSquareIcon };
