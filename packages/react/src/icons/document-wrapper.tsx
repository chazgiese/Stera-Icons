import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DocumentIcon as DocumentIconRegular } from './document';
import { DocumentIconBold } from './document-bold';
import { DocumentIconFilled } from './document-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <DocumentIconRegular ref={ref} {...props} />;
  }
}));

DocumentIcon.displayName = 'DocumentIcon';

export { DocumentIcon };
