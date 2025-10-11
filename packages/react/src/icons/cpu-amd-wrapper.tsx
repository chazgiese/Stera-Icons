import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CpuAmdIcon as CpuAmdIconRegular } from './cpu-amd';
import { CpuAmdIconBold } from './cpu-amd-bold';
import { CpuAmdIconFilled } from './cpu-amd-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CpuAmdIconRegular ref={ref} {...props} />;
  }
}));

CpuAmdIcon.displayName = 'CpuAmdIcon';

export { CpuAmdIcon };
