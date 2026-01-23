import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { DocumentRegular } from './DocumentRegular.js';
import { DocumentRegularDuotone } from './DocumentRegularDuotone.js';
import { DocumentBold } from './DocumentBold.js';
import { DocumentBoldDuotone } from './DocumentBoldDuotone.js';
import { DocumentFill } from './DocumentFill.js';
import { DocumentFillDuotone } from './DocumentFillDuotone.js';

export interface DocumentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Document - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DocumentRegular } from 'stera-icons/icons/DocumentRegular';
 */
const Document = memo(forwardRef<SVGSVGElement, DocumentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DocumentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DocumentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DocumentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DocumentFill ref={ref} {...rest} />;
  if (duotone) return <DocumentRegularDuotone ref={ref} {...rest} />;
  return <DocumentRegular ref={ref} {...rest} />;
}));

Document.displayName = 'Document';

// Triple export pattern (lucide-react style)
export { Document, Document as DocumentIcon, Document as SiDocument };
export default Document;
