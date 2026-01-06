import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanSearchIcon as RegularScanSearchIcon } from './scan-search';
import { ScanSearchIconDuotone as ScanSearchIconDuotone } from './scan-search-duotone';
import { ScanSearchIconBold as ScanSearchIconBold } from './scan-search-bold';
import { ScanSearchIconBoldDuotone as ScanSearchIconBoldDuotone } from './scan-search-bold-duotone';
import { ScanSearchIconFill as ScanSearchIconFill } from './scan-search-fill';
import { ScanSearchIconFillDuotone as ScanSearchIconFillDuotone } from './scan-search-fill-duotone';

export interface ScanSearchIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ScanSearchIcon = memo(forwardRef<SVGSVGElement, ScanSearchIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanSearchIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ScanSearchIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ScanSearchIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ScanSearchIconFill ref={ref} {...props} />;
  if (duotone) return <ScanSearchIconDuotone ref={ref} {...props} />;
  return <RegularScanSearchIcon ref={ref} {...props} />;
}));

ScanSearchIcon.displayName = 'ScanSearchIcon';

export { ScanSearchIcon };
