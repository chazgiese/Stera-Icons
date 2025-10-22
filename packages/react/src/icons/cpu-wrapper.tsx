import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CpuIcon as CpuIconRegular } from './cpu';
import { CpuIconBold } from './cpu-bold';
import { CpuIconFilled } from './cpu-filled';
import { CpuIconFilltone } from './cpu-filltone';
import { CpuIconLinetone } from './cpu-linetone';

export interface CpuIconProps extends IconProps {
  variant?: IconVariant;
}

const CpuIcon = memo(forwardRef<SVGSVGElement, CpuIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CpuIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CpuIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CpuIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CpuIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CpuIconRegular ref={ref} {...props} />;
  }
}));

CpuIcon.displayName = 'CpuIcon';

export { CpuIcon };
