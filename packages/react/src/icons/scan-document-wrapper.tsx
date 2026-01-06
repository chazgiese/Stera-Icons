import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanDocumentIcon as RegularScanDocumentIcon } from './scan-document';
import { ScanDocumentIconDuotone as ScanDocumentIconDuotone } from './scan-document-duotone';
import { ScanDocumentIconBold as ScanDocumentIconBold } from './scan-document-bold';
import { ScanDocumentIconBoldDuotone as ScanDocumentIconBoldDuotone } from './scan-document-bold-duotone';
import { ScanDocumentIconFill as ScanDocumentIconFill } from './scan-document-fill';
import { ScanDocumentIconFillDuotone as ScanDocumentIconFillDuotone } from './scan-document-fill-duotone';

export interface ScanDocumentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ScanDocumentIcon = memo(forwardRef<SVGSVGElement, ScanDocumentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanDocumentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ScanDocumentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ScanDocumentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ScanDocumentIconFill ref={ref} {...props} />;
  if (duotone) return <ScanDocumentIconDuotone ref={ref} {...props} />;
  return <RegularScanDocumentIcon ref={ref} {...props} />;
}));

ScanDocumentIcon.displayName = 'ScanDocumentIcon';

export { ScanDocumentIcon };
