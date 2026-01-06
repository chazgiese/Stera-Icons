import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DocumentCopyIcon as RegularDocumentCopyIcon } from './document-copy';
import { DocumentCopyIconDuotone as DocumentCopyIconDuotone } from './document-copy-duotone';
import { DocumentCopyIconBold as DocumentCopyIconBold } from './document-copy-bold';
import { DocumentCopyIconBoldDuotone as DocumentCopyIconBoldDuotone } from './document-copy-bold-duotone';
import { DocumentCopyIconFill as DocumentCopyIconFill } from './document-copy-fill';
import { DocumentCopyIconFillDuotone as DocumentCopyIconFillDuotone } from './document-copy-fill-duotone';

export interface DocumentCopyIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DocumentCopyIcon = memo(forwardRef<SVGSVGElement, DocumentCopyIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DocumentCopyIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DocumentCopyIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DocumentCopyIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DocumentCopyIconFill ref={ref} {...props} />;
  if (duotone) return <DocumentCopyIconDuotone ref={ref} {...props} />;
  return <RegularDocumentCopyIcon ref={ref} {...props} />;
}));

DocumentCopyIcon.displayName = 'DocumentCopyIcon';

export { DocumentCopyIcon };
