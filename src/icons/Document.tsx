import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DocumentRegular } from './DocumentRegular';
import { DocumentRegularDuotone } from './DocumentRegularDuotone';
import { DocumentBold } from './DocumentBold';
import { DocumentBoldDuotone } from './DocumentBoldDuotone';
import { DocumentFill } from './DocumentFill';
import { DocumentFillDuotone } from './DocumentFillDuotone';

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
