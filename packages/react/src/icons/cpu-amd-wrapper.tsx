import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CpuAmdIcon as RegularCpuAmdIcon } from './cpu-amd';
import { CpuAmdIconBold } from './cpu-amd-bold';
import { CpuAmdIconFilled } from './cpu-amd-filled';
import { CpuAmdIconFilltone } from './cpu-amd-filltone';
import { CpuAmdIconLinetone } from './cpu-amd-linetone';

export interface CpuAmdIconProps extends IconProps {
  variant?: IconVariant;
}

const CpuAmdIcon = memo(forwardRef<SVGSVGElement, CpuAmdIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CpuAmdIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CpuAmdIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CpuAmdIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CpuAmdIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCpuAmdIcon ref={ref} {...props} />;
  }
}));

CpuAmdIcon.displayName = 'CpuAmdIcon';

export { CpuAmdIcon };
