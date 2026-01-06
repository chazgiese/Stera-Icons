import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanCubeIcon as RegularScanCubeIcon } from './scan-cube';
import { ScanCubeIconDuotone as ScanCubeIconDuotone } from './scan-cube-duotone';
import { ScanCubeIconBold as ScanCubeIconBold } from './scan-cube-bold';
import { ScanCubeIconBoldDuotone as ScanCubeIconBoldDuotone } from './scan-cube-bold-duotone';
import { ScanCubeIconFill as ScanCubeIconFill } from './scan-cube-fill';
import { ScanCubeIconFillDuotone as ScanCubeIconFillDuotone } from './scan-cube-fill-duotone';

export interface ScanCubeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ScanCubeIcon = memo(forwardRef<SVGSVGElement, ScanCubeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanCubeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ScanCubeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ScanCubeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ScanCubeIconFill ref={ref} {...props} />;
  if (duotone) return <ScanCubeIconDuotone ref={ref} {...props} />;
  return <RegularScanCubeIcon ref={ref} {...props} />;
}));

ScanCubeIcon.displayName = 'ScanCubeIcon';

export { ScanCubeIcon };
