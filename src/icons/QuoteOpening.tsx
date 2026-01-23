import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { QuoteOpeningRegular } from './QuoteOpeningRegular.js';
import { QuoteOpeningRegularDuotone } from './QuoteOpeningRegularDuotone.js';
import { QuoteOpeningBold } from './QuoteOpeningBold.js';
import { QuoteOpeningBoldDuotone } from './QuoteOpeningBoldDuotone.js';
import { QuoteOpeningFill } from './QuoteOpeningFill.js';
import { QuoteOpeningFillDuotone } from './QuoteOpeningFillDuotone.js';

export interface QuoteOpeningProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * QuoteOpening - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { QuoteOpeningRegular } from 'stera-icons/icons/QuoteOpeningRegular';
 */
const QuoteOpening = memo(forwardRef<SVGSVGElement, QuoteOpeningProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <QuoteOpeningBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <QuoteOpeningBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <QuoteOpeningFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <QuoteOpeningFill ref={ref} {...rest} />;
  if (duotone) return <QuoteOpeningRegularDuotone ref={ref} {...rest} />;
  return <QuoteOpeningRegular ref={ref} {...rest} />;
}));

QuoteOpening.displayName = 'QuoteOpening';

// Triple export pattern (lucide-react style)
export { QuoteOpening, QuoteOpening as QuoteOpeningIcon, QuoteOpening as SiQuoteOpening };
export default QuoteOpening;
