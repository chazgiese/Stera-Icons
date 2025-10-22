import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ScanDocumentIcon as RegularScanDocumentIcon } from './scan-document';
import { ScanDocumentIconBold } from './scan-document-bold';
import { ScanDocumentIconFilled } from './scan-document-filled';
import { ScanDocumentIconFilltone } from './scan-document-filltone';
import { ScanDocumentIconLinetone } from './scan-document-linetone';

export interface ScanDocumentIconProps extends IconProps {
  variant?: IconVariant;
}

const ScanDocumentIcon = memo(forwardRef<SVGSVGElement, ScanDocumentIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ScanDocumentIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ScanDocumentIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ScanDocumentIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ScanDocumentIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularScanDocumentIcon ref={ref} {...props} />;
  }
}));

ScanDocumentIcon.displayName = 'ScanDocumentIcon';

export { ScanDocumentIcon };
