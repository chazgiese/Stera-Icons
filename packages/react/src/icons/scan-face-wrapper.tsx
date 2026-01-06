import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanFaceIcon as RegularScanFaceIcon } from './scan-face';
import { ScanFaceIconDuotone as ScanFaceIconDuotone } from './scan-face-duotone';
import { ScanFaceIconBold as ScanFaceIconBold } from './scan-face-bold';
import { ScanFaceIconBoldDuotone as ScanFaceIconBoldDuotone } from './scan-face-bold-duotone';
import { ScanFaceIconFill as ScanFaceIconFill } from './scan-face-fill';
import { ScanFaceIconFillDuotone as ScanFaceIconFillDuotone } from './scan-face-fill-duotone';

export interface ScanFaceIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ScanFaceIcon = memo(forwardRef<SVGSVGElement, ScanFaceIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanFaceIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ScanFaceIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ScanFaceIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ScanFaceIconFill ref={ref} {...props} />;
  if (duotone) return <ScanFaceIconDuotone ref={ref} {...props} />;
  return <RegularScanFaceIcon ref={ref} {...props} />;
}));

ScanFaceIcon.displayName = 'ScanFaceIcon';

export { ScanFaceIcon };
