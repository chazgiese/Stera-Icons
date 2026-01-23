import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { DocumentCopyRegular } from './DocumentCopyRegular.js';
import { DocumentCopyRegularDuotone } from './DocumentCopyRegularDuotone.js';
import { DocumentCopyBold } from './DocumentCopyBold.js';
import { DocumentCopyBoldDuotone } from './DocumentCopyBoldDuotone.js';
import { DocumentCopyFill } from './DocumentCopyFill.js';
import { DocumentCopyFillDuotone } from './DocumentCopyFillDuotone.js';

export interface DocumentCopyProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * DocumentCopy - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DocumentCopyRegular } from 'stera-icons/icons/DocumentCopyRegular';
 */
const DocumentCopy = memo(forwardRef<SVGSVGElement, DocumentCopyProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DocumentCopyBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DocumentCopyBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DocumentCopyFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DocumentCopyFill ref={ref} {...rest} />;
  if (duotone) return <DocumentCopyRegularDuotone ref={ref} {...rest} />;
  return <DocumentCopyRegular ref={ref} {...rest} />;
}));

DocumentCopy.displayName = 'DocumentCopy';

// Triple export pattern (lucide-react style)
export { DocumentCopy, DocumentCopy as DocumentCopyIcon, DocumentCopy as SiDocumentCopy };
export default DocumentCopy;
