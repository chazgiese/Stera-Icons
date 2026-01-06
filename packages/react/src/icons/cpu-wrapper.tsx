import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CpuIcon as RegularCpuIcon } from './cpu';
import { CpuIconDuotone as CpuIconDuotone } from './cpu-duotone';
import { CpuIconBold as CpuIconBold } from './cpu-bold';
import { CpuIconBoldDuotone as CpuIconBoldDuotone } from './cpu-bold-duotone';
import { CpuIconFill as CpuIconFill } from './cpu-fill';
import { CpuIconFillDuotone as CpuIconFillDuotone } from './cpu-fill-duotone';

export interface CpuIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CpuIcon = memo(forwardRef<SVGSVGElement, CpuIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CpuIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CpuIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CpuIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CpuIconFill ref={ref} {...props} />;
  if (duotone) return <CpuIconDuotone ref={ref} {...props} />;
  return <RegularCpuIcon ref={ref} {...props} />;
}));

CpuIcon.displayName = 'CpuIcon';

export { CpuIcon };
