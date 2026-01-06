import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanLineIcon as RegularScanLineIcon } from './scan-line';
import { ScanLineIconDuotone as ScanLineIconDuotone } from './scan-line-duotone';
import { ScanLineIconBold as ScanLineIconBold } from './scan-line-bold';
import { ScanLineIconBoldDuotone as ScanLineIconBoldDuotone } from './scan-line-bold-duotone';
import { ScanLineIconFill as ScanLineIconFill } from './scan-line-fill';
import { ScanLineIconFillDuotone as ScanLineIconFillDuotone } from './scan-line-fill-duotone';

export interface ScanLineIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ScanLineIcon = memo(forwardRef<SVGSVGElement, ScanLineIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanLineIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ScanLineIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ScanLineIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ScanLineIconFill ref={ref} {...props} />;
  if (duotone) return <ScanLineIconDuotone ref={ref} {...props} />;
  return <RegularScanLineIcon ref={ref} {...props} />;
}));

ScanLineIcon.displayName = 'ScanLineIcon';

export { ScanLineIcon };
