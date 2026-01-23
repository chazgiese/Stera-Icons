import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CpuRegular } from './CpuRegular.js';
import { CpuRegularDuotone } from './CpuRegularDuotone.js';
import { CpuBold } from './CpuBold.js';
import { CpuBoldDuotone } from './CpuBoldDuotone.js';
import { CpuFill } from './CpuFill.js';
import { CpuFillDuotone } from './CpuFillDuotone.js';

export interface CpuProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Cpu - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CpuRegular } from 'stera-icons/icons/CpuRegular';
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

// Triple export pattern (lucide-react style)
export { Cpu, Cpu as CpuIcon, Cpu as SiCpu };
export default Cpu;
