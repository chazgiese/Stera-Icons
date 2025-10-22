import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ScanBarcodeIcon as ScanBarcodeIconRegular } from './scan-barcode';
import { ScanBarcodeIconBold } from './scan-barcode-bold';
import { ScanBarcodeIconFilled } from './scan-barcode-filled';
import { ScanBarcodeIconFilltone } from './scan-barcode-filltone';
import { ScanBarcodeIconLinetone } from './scan-barcode-linetone';

export interface ScanBarcodeIconProps extends IconProps {
  variant?: IconVariant;
}

const ScanBarcodeIcon = memo(forwardRef<SVGSVGElement, ScanBarcodeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ScanBarcodeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ScanBarcodeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ScanBarcodeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ScanBarcodeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ScanBarcodeIconRegular ref={ref} {...props} />;
  }
}));

ScanBarcodeIcon.displayName = 'ScanBarcodeIcon';

export { ScanBarcodeIcon };
