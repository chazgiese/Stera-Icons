import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanPlusIcon as RegularScanPlusIcon } from './scan-plus';
import { ScanPlusIconDuotone as ScanPlusIconDuotone } from './scan-plus-duotone';
import { ScanPlusIconBold as ScanPlusIconBold } from './scan-plus-bold';
import { ScanPlusIconBoldDuotone as ScanPlusIconBoldDuotone } from './scan-plus-bold-duotone';
import { ScanPlusIconFill as ScanPlusIconFill } from './scan-plus-fill';
import { ScanPlusIconFillDuotone as ScanPlusIconFillDuotone } from './scan-plus-fill-duotone';

export interface ScanPlusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ScanPlusIcon = memo(forwardRef<SVGSVGElement, ScanPlusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanPlusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ScanPlusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ScanPlusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ScanPlusIconFill ref={ref} {...props} />;
  if (duotone) return <ScanPlusIconDuotone ref={ref} {...props} />;
  return <RegularScanPlusIcon ref={ref} {...props} />;
}));

ScanPlusIcon.displayName = 'ScanPlusIcon';

export { ScanPlusIcon };
