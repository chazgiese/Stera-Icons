import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SquareGridIcon as SquareGridIconRegular } from './square-grid';
import { SquareGridIconBold } from './square-grid-bold';
import { SquareGridIconFilled } from './square-grid-filled';
import { SquareGridIconFilltone } from './square-grid-filltone';
import { SquareGridIconLinetone } from './square-grid-linetone';

export interface SquareGridIconProps extends IconProps {
  variant?: IconVariant;
}

const SquareGridIcon = memo(forwardRef<SVGSVGElement, SquareGridIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SquareGridIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SquareGridIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SquareGridIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SquareGridIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <SquareGridIconRegular ref={ref} {...props} />;
  }
}));

SquareGridIcon.displayName = 'SquareGridIcon';

export { SquareGridIcon };
