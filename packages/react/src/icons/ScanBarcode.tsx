import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanBarcodeRegular } from './ScanBarcodeRegular';
import { ScanBarcodeRegularDuotone } from './ScanBarcodeRegularDuotone';
import { ScanBarcodeBold } from './ScanBarcodeBold';
import { ScanBarcodeBoldDuotone } from './ScanBarcodeBoldDuotone';
import { ScanBarcodeFill } from './ScanBarcodeFill';
import { ScanBarcodeFillDuotone } from './ScanBarcodeFillDuotone';

export interface ScanBarcodeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ScanBarcode with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ScanBarcodeRegular } from 'stera-icons/ScanBarcodeRegular';
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

export { ScanBarcode };
