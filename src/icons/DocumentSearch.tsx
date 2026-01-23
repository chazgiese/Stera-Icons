import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { DocumentSearchRegular } from './DocumentSearchRegular.js';
import { DocumentSearchRegularDuotone } from './DocumentSearchRegularDuotone.js';
import { DocumentSearchBold } from './DocumentSearchBold.js';
import { DocumentSearchBoldDuotone } from './DocumentSearchBoldDuotone.js';
import { DocumentSearchFill } from './DocumentSearchFill.js';
import { DocumentSearchFillDuotone } from './DocumentSearchFillDuotone.js';

export interface DocumentSearchProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * DocumentSearch - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DocumentSearchRegular } from 'stera-icons/icons/DocumentSearchRegular';
 */
const DocumentSearch = memo(forwardRef<SVGSVGElement, DocumentSearchProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DocumentSearchBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DocumentSearchBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DocumentSearchFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DocumentSearchFill ref={ref} {...rest} />;
  if (duotone) return <DocumentSearchRegularDuotone ref={ref} {...rest} />;
  return <DocumentSearchRegular ref={ref} {...rest} />;
}));

DocumentSearch.displayName = 'DocumentSearch';

// Triple export pattern (lucide-react style)
export { DocumentSearch, DocumentSearch as DocumentSearchIcon, DocumentSearch as SiDocumentSearch };
export default DocumentSearch;
