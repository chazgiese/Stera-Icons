import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DocumentIcon as RegularDocumentIcon } from './document';
import { DocumentIconDuotone as DocumentIconDuotone } from './document-duotone';
import { DocumentIconBold as DocumentIconBold } from './document-bold';
import { DocumentIconBoldDuotone as DocumentIconBoldDuotone } from './document-bold-duotone';
import { DocumentIconFill as DocumentIconFill } from './document-fill';
import { DocumentIconFillDuotone as DocumentIconFillDuotone } from './document-fill-duotone';

export interface DocumentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DocumentIcon = memo(forwardRef<SVGSVGElement, DocumentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DocumentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DocumentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DocumentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DocumentIconFill ref={ref} {...props} />;
  if (duotone) return <DocumentIconDuotone ref={ref} {...props} />;
  return <RegularDocumentIcon ref={ref} {...props} />;
}));

DocumentIcon.displayName = 'DocumentIcon';

export { DocumentIcon };
