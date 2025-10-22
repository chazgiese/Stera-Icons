import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CubeIcon as CubeIconRegular } from './cube';
import { CubeIconBold } from './cube-bold';
import { CubeIconFilled } from './cube-filled';
import { CubeIconFilltone } from './cube-filltone';
import { CubeIconLinetone } from './cube-linetone';

export interface CubeIconProps extends IconProps {
  variant?: IconVariant;
}

const CubeIcon = memo(forwardRef<SVGSVGElement, CubeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CubeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CubeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CubeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CubeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CubeIconRegular ref={ref} {...props} />;
  }
}));

CubeIcon.displayName = 'CubeIcon';

export { CubeIcon };
