import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanIcon as RegularScanIcon } from './scan';
import { ScanIconDuotone as ScanIconDuotone } from './scan-duotone';
import { ScanIconBold as ScanIconBold } from './scan-bold';
import { ScanIconBoldDuotone as ScanIconBoldDuotone } from './scan-bold-duotone';
import { ScanIconFill as ScanIconFill } from './scan-fill';
import { ScanIconFillDuotone as ScanIconFillDuotone } from './scan-fill-duotone';

export interface ScanIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ScanIcon = memo(forwardRef<SVGSVGElement, ScanIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ScanIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ScanIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ScanIconFill ref={ref} {...props} />;
  if (duotone) return <ScanIconDuotone ref={ref} {...props} />;
  return <RegularScanIcon ref={ref} {...props} />;
}));

ScanIcon.displayName = 'ScanIcon';

export { ScanIcon };
