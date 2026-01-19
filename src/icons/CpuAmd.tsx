import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CpuAmdRegular } from './CpuAmdRegular';
import { CpuAmdRegularDuotone } from './CpuAmdRegularDuotone';
import { CpuAmdBold } from './CpuAmdBold';
import { CpuAmdBoldDuotone } from './CpuAmdBoldDuotone';
import { CpuAmdFill } from './CpuAmdFill';
import { CpuAmdFillDuotone } from './CpuAmdFillDuotone';

export interface CpuAmdProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CpuAmd - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CpuAmdRegular } from 'stera-icons/icons/CpuAmdRegular';
 */
const CpuAmd = memo(forwardRef<SVGSVGElement, CpuAmdProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CpuAmdBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CpuAmdBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CpuAmdFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CpuAmdFill ref={ref} {...rest} />;
  if (duotone) return <CpuAmdRegularDuotone ref={ref} {...rest} />;
  return <CpuAmdRegular ref={ref} {...rest} />;
}));

CpuAmd.displayName = 'CpuAmd';

// Triple export pattern (lucide-react style)
export { CpuAmd, CpuAmd as CpuAmdIcon, CpuAmd as SiCpuAmd };
export default CpuAmd;
