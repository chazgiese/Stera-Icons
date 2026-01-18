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
 * Document with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { DocumentRegular } from 'stera-icons/DocumentRegular';
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

export { Document };
