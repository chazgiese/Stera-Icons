import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanEyeIcon as RegularScanEyeIcon } from './scan-eye';
import { ScanEyeIconDuotone as ScanEyeIconDuotone } from './scan-eye-duotone';
import { ScanEyeIconBold as ScanEyeIconBold } from './scan-eye-bold';
import { ScanEyeIconBoldDuotone as ScanEyeIconBoldDuotone } from './scan-eye-bold-duotone';
import { ScanEyeIconFill as ScanEyeIconFill } from './scan-eye-fill';
import { ScanEyeIconFillDuotone as ScanEyeIconFillDuotone } from './scan-eye-fill-duotone';

export interface ScanEyeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ScanEyeIcon = memo(forwardRef<SVGSVGElement, ScanEyeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanEyeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ScanEyeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ScanEyeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ScanEyeIconFill ref={ref} {...props} />;
  if (duotone) return <ScanEyeIconDuotone ref={ref} {...props} />;
  return <RegularScanEyeIcon ref={ref} {...props} />;
}));

ScanEyeIcon.displayName = 'ScanEyeIcon';

export { ScanEyeIcon };
