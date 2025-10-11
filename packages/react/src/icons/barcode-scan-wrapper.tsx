import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BarcodeScanIcon as BarcodeScanIconRegular } from './barcode-scan';
import { BarcodeScanIconBold } from './barcode-scan-bold';
import { BarcodeScanIconFilled } from './barcode-scan-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BarcodeScanIconProps extends IconProps {
  variant?: IconVariant;
}

const BarcodeScanIcon = memo(forwardRef<SVGSVGElement, BarcodeScanIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BarcodeScanIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BarcodeScanIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BarcodeScanIconRegular ref={ref} {...props} />;
  }
}));

BarcodeScanIcon.displayName = 'BarcodeScanIcon';

export { BarcodeScanIcon };
