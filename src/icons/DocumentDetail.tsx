import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DocumentDetailRegular } from './DocumentDetailRegular';
import { DocumentDetailRegularDuotone } from './DocumentDetailRegularDuotone';
import { DocumentDetailBold } from './DocumentDetailBold';
import { DocumentDetailBoldDuotone } from './DocumentDetailBoldDuotone';
import { DocumentDetailFill } from './DocumentDetailFill';
import { DocumentDetailFillDuotone } from './DocumentDetailFillDuotone';

export interface DocumentDetailProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * DocumentDetail - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DocumentDetailRegular } from 'stera-icons/icons/DocumentDetailRegular';
 */
const DocumentDetail = memo(forwardRef<SVGSVGElement, DocumentDetailProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DocumentDetailBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DocumentDetailBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DocumentDetailFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DocumentDetailFill ref={ref} {...rest} />;
  if (duotone) return <DocumentDetailRegularDuotone ref={ref} {...rest} />;
  return <DocumentDetailRegular ref={ref} {...rest} />;
}));

DocumentDetail.displayName = 'DocumentDetail';

// Triple export pattern (lucide-react style)
export { DocumentDetail, DocumentDetail as DocumentDetailIcon, DocumentDetail as SiDocumentDetail };
export default DocumentDetail;
