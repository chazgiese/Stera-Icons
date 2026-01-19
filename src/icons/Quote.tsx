import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { QuoteRegular } from './QuoteRegular';
import { QuoteRegularDuotone } from './QuoteRegularDuotone';
import { QuoteBold } from './QuoteBold';
import { QuoteBoldDuotone } from './QuoteBoldDuotone';
import { QuoteFill } from './QuoteFill';
import { QuoteFillDuotone } from './QuoteFillDuotone';

export interface QuoteProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Quote - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { QuoteRegular } from 'stera-icons/icons/QuoteRegular';
 */
const Quote = memo(forwardRef<SVGSVGElement, QuoteProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <QuoteBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <QuoteBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <QuoteFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <QuoteFill ref={ref} {...rest} />;
  if (duotone) return <QuoteRegularDuotone ref={ref} {...rest} />;
  return <QuoteRegular ref={ref} {...rest} />;
}));

Quote.displayName = 'Quote';

// Triple export pattern (lucide-react style)
export { Quote, Quote as QuoteIcon, Quote as SiQuote };
