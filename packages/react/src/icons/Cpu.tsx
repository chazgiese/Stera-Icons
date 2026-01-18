import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CpuRegular } from './CpuRegular';
import { CpuRegularDuotone } from './CpuRegularDuotone';
import { CpuBold } from './CpuBold';
import { CpuBoldDuotone } from './CpuBoldDuotone';
import { CpuFill } from './CpuFill';
import { CpuFillDuotone } from './CpuFillDuotone';

export interface CpuProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Cpu with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CpuRegular } from 'stera-icons/CpuRegular';
 */
const Cpu = memo(forwardRef<SVGSVGElement, CpuProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CpuBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CpuBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CpuFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CpuFill ref={ref} {...rest} />;
  if (duotone) return <CpuRegularDuotone ref={ref} {...rest} />;
  return <CpuRegular ref={ref} {...rest} />;
}));

Cpu.displayName = 'Cpu';

export { Cpu };
