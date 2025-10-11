import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CubeIcon as CubeIconRegular } from './cube';
import { CubeIconBold } from './cube-bold';
import { CubeIconFilled } from './cube-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CubeIconRegular ref={ref} {...props} />;
  }
}));

CubeIcon.displayName = 'CubeIcon';

export { CubeIcon };
