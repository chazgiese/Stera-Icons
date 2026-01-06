import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CpuAmdIcon as RegularCpuAmdIcon } from './cpu-amd';
import { CpuAmdIconDuotone as CpuAmdIconDuotone } from './cpu-amd-duotone';
import { CpuAmdIconBold as CpuAmdIconBold } from './cpu-amd-bold';
import { CpuAmdIconBoldDuotone as CpuAmdIconBoldDuotone } from './cpu-amd-bold-duotone';
import { CpuAmdIconFill as CpuAmdIconFill } from './cpu-amd-fill';
import { CpuAmdIconFillDuotone as CpuAmdIconFillDuotone } from './cpu-amd-fill-duotone';

export interface CpuAmdIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CpuAmdIcon = memo(forwardRef<SVGSVGElement, CpuAmdIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CpuAmdIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CpuAmdIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CpuAmdIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CpuAmdIconFill ref={ref} {...props} />;
  if (duotone) return <CpuAmdIconDuotone ref={ref} {...props} />;
  return <RegularCpuAmdIcon ref={ref} {...props} />;
}));

CpuAmdIcon.displayName = 'CpuAmdIcon';

export { CpuAmdIcon };
