import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DocumentDetailIcon as RegularDocumentDetailIcon } from './document-detail';
import { DocumentDetailIconDuotone as DocumentDetailIconDuotone } from './document-detail-duotone';
import { DocumentDetailIconBold as DocumentDetailIconBold } from './document-detail-bold';
import { DocumentDetailIconBoldDuotone as DocumentDetailIconBoldDuotone } from './document-detail-bold-duotone';
import { DocumentDetailIconFill as DocumentDetailIconFill } from './document-detail-fill';
import { DocumentDetailIconFillDuotone as DocumentDetailIconFillDuotone } from './document-detail-fill-duotone';

export interface DocumentDetailIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DocumentDetailIcon = memo(forwardRef<SVGSVGElement, DocumentDetailIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DocumentDetailIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DocumentDetailIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DocumentDetailIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DocumentDetailIconFill ref={ref} {...props} />;
  if (duotone) return <DocumentDetailIconDuotone ref={ref} {...props} />;
  return <RegularDocumentDetailIcon ref={ref} {...props} />;
}));

DocumentDetailIcon.displayName = 'DocumentDetailIcon';

export { DocumentDetailIcon };
