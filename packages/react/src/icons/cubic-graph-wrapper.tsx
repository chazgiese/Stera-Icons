import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CubicGraphIcon as RegularCubicGraphIcon } from './cubic-graph';
import { CubicGraphIconBold } from './cubic-graph-bold';
import { CubicGraphIconFilled } from './cubic-graph-filled';
import { CubicGraphIconFilltone } from './cubic-graph-filltone';
import { CubicGraphIconLinetone } from './cubic-graph-linetone';

export interface CubicGraphIconProps extends IconProps {
  variant?: IconVariant;
}

const CubicGraphIcon = memo(forwardRef<SVGSVGElement, CubicGraphIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CubicGraphIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CubicGraphIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CubicGraphIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CubicGraphIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCubicGraphIcon ref={ref} {...props} />;
  }
}));

CubicGraphIcon.displayName = 'CubicGraphIcon';

export { CubicGraphIcon };
