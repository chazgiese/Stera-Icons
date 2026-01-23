import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ScanLineRegular } from './ScanLineRegular.js';
import { ScanLineRegularDuotone } from './ScanLineRegularDuotone.js';
import { ScanLineBold } from './ScanLineBold.js';
import { ScanLineBoldDuotone } from './ScanLineBoldDuotone.js';
import { ScanLineFill } from './ScanLineFill.js';
import { ScanLineFillDuotone } from './ScanLineFillDuotone.js';

export interface ScanLineProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ScanLine - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ScanLineRegular } from 'stera-icons/icons/ScanLineRegular';
 */
const ScanLine = memo(forwardRef<SVGSVGElement, ScanLineProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanLineBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScanLineBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScanLineFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScanLineFill ref={ref} {...rest} />;
  if (duotone) return <ScanLineRegularDuotone ref={ref} {...rest} />;
  return <ScanLineRegular ref={ref} {...rest} />;
}));

ScanLine.displayName = 'ScanLine';

// Triple export pattern (lucide-react style)
export { ScanLine, ScanLine as ScanLineIcon, ScanLine as SiScanLine };
export default ScanLine;
