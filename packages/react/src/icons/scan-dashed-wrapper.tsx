import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanDashedIcon as RegularScanDashedIcon } from './scan-dashed';
import { ScanDashedIconDuotone as ScanDashedIconDuotone } from './scan-dashed-duotone';
import { ScanDashedIconBold as ScanDashedIconBold } from './scan-dashed-bold';
import { ScanDashedIconBoldDuotone as ScanDashedIconBoldDuotone } from './scan-dashed-bold-duotone';
import { ScanDashedIconFill as ScanDashedIconFill } from './scan-dashed-fill';
import { ScanDashedIconFillDuotone as ScanDashedIconFillDuotone } from './scan-dashed-fill-duotone';

export interface ScanDashedIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ScanDashedIcon = memo(forwardRef<SVGSVGElement, ScanDashedIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanDashedIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ScanDashedIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ScanDashedIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ScanDashedIconFill ref={ref} {...props} />;
  if (duotone) return <ScanDashedIconDuotone ref={ref} {...props} />;
  return <RegularScanDashedIcon ref={ref} {...props} />;
}));

ScanDashedIcon.displayName = 'ScanDashedIcon';

export { ScanDashedIcon };
