import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PieIcon as RegularPieIcon } from './pie';
import { PieIconBold } from './pie-bold';
import { PieIconFilled } from './pie-filled';
import { PieIconFilltone } from './pie-filltone';
import { PieIconLinetone } from './pie-linetone';

export interface PieIconProps extends IconProps {
  variant?: IconVariant;
}

const PieIcon = memo(forwardRef<SVGSVGElement, PieIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PieIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PieIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PieIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PieIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPieIcon ref={ref} {...props} />;
  }
}));

PieIcon.displayName = 'PieIcon';

export { PieIcon };
