import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { DocumentDetailIcon as RegularDocumentDetailIcon } from './document-detail';
import { DocumentDetailIconBold } from './document-detail-bold';
import { DocumentDetailIconFilled } from './document-detail-filled';
import { DocumentDetailIconFilltone } from './document-detail-filltone';
import { DocumentDetailIconLinetone } from './document-detail-linetone';

export interface DocumentDetailIconProps extends IconProps {
  variant?: IconVariant;
}

const DocumentDetailIcon = memo(forwardRef<SVGSVGElement, DocumentDetailIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DocumentDetailIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DocumentDetailIconBold ref={ref} {...props} />;
    case 'filltone':
      return <DocumentDetailIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <DocumentDetailIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularDocumentDetailIcon ref={ref} {...props} />;
  }
}));

DocumentDetailIcon.displayName = 'DocumentDetailIcon';

export { DocumentDetailIcon };
