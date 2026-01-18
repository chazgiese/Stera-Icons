import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanDocumentRegular } from './ScanDocumentRegular';
import { ScanDocumentRegularDuotone } from './ScanDocumentRegularDuotone';
import { ScanDocumentBold } from './ScanDocumentBold';
import { ScanDocumentBoldDuotone } from './ScanDocumentBoldDuotone';
import { ScanDocumentFill } from './ScanDocumentFill';
import { ScanDocumentFillDuotone } from './ScanDocumentFillDuotone';

export interface ScanDocumentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ScanDocument - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ScanDocumentRegular } from 'stera-icons/ScanDocumentRegular';
 */
const ScanDocument = memo(forwardRef<SVGSVGElement, ScanDocumentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanDocumentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScanDocumentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScanDocumentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScanDocumentFill ref={ref} {...rest} />;
  if (duotone) return <ScanDocumentRegularDuotone ref={ref} {...rest} />;
  return <ScanDocumentRegular ref={ref} {...rest} />;
}));

ScanDocument.displayName = 'ScanDocument';

// Triple export pattern (lucide-react style)
export { ScanDocument, ScanDocument as ScanDocumentIcon, ScanDocument as SiScanDocument };
