import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DocumentDetailIcon as DocumentDetailIconRegular } from './document-detail';
import { DocumentDetailIconBold } from './document-detail-bold';
import { DocumentDetailIconFilled } from './document-detail-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <DocumentDetailIconRegular ref={ref} {...props} />;
  }
}));

DocumentDetailIcon.displayName = 'DocumentDetailIcon';

export { DocumentDetailIcon };
