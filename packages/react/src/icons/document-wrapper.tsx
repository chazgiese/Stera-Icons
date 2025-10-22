import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { DocumentIcon as RegularDocumentIcon } from './document';
import { DocumentIconBold } from './document-bold';
import { DocumentIconFilled } from './document-filled';
import { DocumentIconFilltone } from './document-filltone';
import { DocumentIconLinetone } from './document-linetone';

export interface DocumentIconProps extends IconProps {
  variant?: IconVariant;
}

const DocumentIcon = memo(forwardRef<SVGSVGElement, DocumentIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DocumentIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DocumentIconBold ref={ref} {...props} />;
    case 'filltone':
      return <DocumentIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <DocumentIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularDocumentIcon ref={ref} {...props} />;
  }
}));

DocumentIcon.displayName = 'DocumentIcon';

export { DocumentIcon };
