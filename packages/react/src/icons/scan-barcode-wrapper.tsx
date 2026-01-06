import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanBarcodeIcon as RegularScanBarcodeIcon } from './scan-barcode';
import { ScanBarcodeIconDuotone as ScanBarcodeIconDuotone } from './scan-barcode-duotone';
import { ScanBarcodeIconBold as ScanBarcodeIconBold } from './scan-barcode-bold';
import { ScanBarcodeIconBoldDuotone as ScanBarcodeIconBoldDuotone } from './scan-barcode-bold-duotone';
import { ScanBarcodeIconFill as ScanBarcodeIconFill } from './scan-barcode-fill';
import { ScanBarcodeIconFillDuotone as ScanBarcodeIconFillDuotone } from './scan-barcode-fill-duotone';

export interface ScanBarcodeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ScanBarcodeIcon = memo(forwardRef<SVGSVGElement, ScanBarcodeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanBarcodeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ScanBarcodeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ScanBarcodeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ScanBarcodeIconFill ref={ref} {...props} />;
  if (duotone) return <ScanBarcodeIconDuotone ref={ref} {...props} />;
  return <RegularScanBarcodeIcon ref={ref} {...props} />;
}));

ScanBarcodeIcon.displayName = 'ScanBarcodeIcon';

export { ScanBarcodeIcon };
