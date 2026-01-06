import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanTextIcon as RegularScanTextIcon } from './scan-text';
import { ScanTextIconDuotone as ScanTextIconDuotone } from './scan-text-duotone';
import { ScanTextIconBold as ScanTextIconBold } from './scan-text-bold';
import { ScanTextIconBoldDuotone as ScanTextIconBoldDuotone } from './scan-text-bold-duotone';
import { ScanTextIconFill as ScanTextIconFill } from './scan-text-fill';
import { ScanTextIconFillDuotone as ScanTextIconFillDuotone } from './scan-text-fill-duotone';

export interface ScanTextIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ScanTextIcon = memo(forwardRef<SVGSVGElement, ScanTextIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanTextIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ScanTextIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ScanTextIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ScanTextIconFill ref={ref} {...props} />;
  if (duotone) return <ScanTextIconDuotone ref={ref} {...props} />;
  return <RegularScanTextIcon ref={ref} {...props} />;
}));

ScanTextIcon.displayName = 'ScanTextIcon';

export { ScanTextIcon };
