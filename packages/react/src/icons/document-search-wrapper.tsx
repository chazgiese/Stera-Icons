import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DocumentSearchIcon as RegularDocumentSearchIcon } from './document-search';
import { DocumentSearchIconDuotone as DocumentSearchIconDuotone } from './document-search-duotone';
import { DocumentSearchIconBold as DocumentSearchIconBold } from './document-search-bold';
import { DocumentSearchIconBoldDuotone as DocumentSearchIconBoldDuotone } from './document-search-bold-duotone';
import { DocumentSearchIconFill as DocumentSearchIconFill } from './document-search-fill';
import { DocumentSearchIconFillDuotone as DocumentSearchIconFillDuotone } from './document-search-fill-duotone';

export interface DocumentSearchIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DocumentSearchIcon = memo(forwardRef<SVGSVGElement, DocumentSearchIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DocumentSearchIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DocumentSearchIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DocumentSearchIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DocumentSearchIconFill ref={ref} {...props} />;
  if (duotone) return <DocumentSearchIconDuotone ref={ref} {...props} />;
  return <RegularDocumentSearchIcon ref={ref} {...props} />;
}));

DocumentSearchIcon.displayName = 'DocumentSearchIcon';

export { DocumentSearchIcon };
