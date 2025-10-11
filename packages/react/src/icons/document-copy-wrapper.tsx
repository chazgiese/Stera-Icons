import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DocumentCopyIcon as DocumentCopyIconRegular } from './document-copy';
import { DocumentCopyIconBold } from './document-copy-bold';
import { DocumentCopyIconFilled } from './document-copy-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface DocumentCopyIconProps extends IconProps {
  variant?: IconVariant;
}

const DocumentCopyIcon = memo(forwardRef<SVGSVGElement, DocumentCopyIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DocumentCopyIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DocumentCopyIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <DocumentCopyIconRegular ref={ref} {...props} />;
  }
}));

DocumentCopyIcon.displayName = 'DocumentCopyIcon';

export { DocumentCopyIcon };
