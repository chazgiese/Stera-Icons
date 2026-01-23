import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ScanBarcodeRegular } from './ScanBarcodeRegular.js';
import { ScanBarcodeRegularDuotone } from './ScanBarcodeRegularDuotone.js';
import { ScanBarcodeBold } from './ScanBarcodeBold.js';
import { ScanBarcodeBoldDuotone } from './ScanBarcodeBoldDuotone.js';
import { ScanBarcodeFill } from './ScanBarcodeFill.js';
import { ScanBarcodeFillDuotone } from './ScanBarcodeFillDuotone.js';

export interface ScanBarcodeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ScanBarcode - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ScanBarcodeRegular } from 'stera-icons/icons/ScanBarcodeRegular';
 */
const ScanBarcode = memo(forwardRef<SVGSVGElement, ScanBarcodeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanBarcodeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScanBarcodeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScanBarcodeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScanBarcodeFill ref={ref} {...rest} />;
  if (duotone) return <ScanBarcodeRegularDuotone ref={ref} {...rest} />;
  return <ScanBarcodeRegular ref={ref} {...rest} />;
}));

ScanBarcode.displayName = 'ScanBarcode';

// Triple export pattern (lucide-react style)
export { ScanBarcode, ScanBarcode as ScanBarcodeIcon, ScanBarcode as SiScanBarcode };
export default ScanBarcode;
