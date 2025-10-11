import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanDocumentIcon as ScanDocumentIconRegular } from './scan-document';
import { ScanDocumentIconBold } from './scan-document-bold';
import { ScanDocumentIconFilled } from './scan-document-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ScanDocumentIconRegular ref={ref} {...props} />;
  }
}));

ScanDocumentIcon.displayName = 'ScanDocumentIcon';

export { ScanDocumentIcon };
