import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ScanEyeRegular } from './ScanEyeRegular.js';
import { ScanEyeRegularDuotone } from './ScanEyeRegularDuotone.js';
import { ScanEyeBold } from './ScanEyeBold.js';
import { ScanEyeBoldDuotone } from './ScanEyeBoldDuotone.js';
import { ScanEyeFill } from './ScanEyeFill.js';
import { ScanEyeFillDuotone } from './ScanEyeFillDuotone.js';

export interface ScanEyeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ScanEye - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ScanEyeRegular } from 'stera-icons/icons/ScanEyeRegular';
 */
const ScanEye = memo(forwardRef<SVGSVGElement, ScanEyeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanEyeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScanEyeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScanEyeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScanEyeFill ref={ref} {...rest} />;
  if (duotone) return <ScanEyeRegularDuotone ref={ref} {...rest} />;
  return <ScanEyeRegular ref={ref} {...rest} />;
}));

ScanEye.displayName = 'ScanEye';

// Triple export pattern (lucide-react style)
export { ScanEye, ScanEye as ScanEyeIcon, ScanEye as SiScanEye };
export default ScanEye;
