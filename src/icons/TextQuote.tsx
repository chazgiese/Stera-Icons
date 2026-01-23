import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TextQuoteRegular } from './TextQuoteRegular.js';
import { TextQuoteRegularDuotone } from './TextQuoteRegularDuotone.js';
import { TextQuoteBold } from './TextQuoteBold.js';
import { TextQuoteBoldDuotone } from './TextQuoteBoldDuotone.js';
import { TextQuoteFill } from './TextQuoteFill.js';
import { TextQuoteFillDuotone } from './TextQuoteFillDuotone.js';

export interface TextQuoteProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TextQuote - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TextQuoteRegular } from 'stera-icons/icons/TextQuoteRegular';
 */
const TextQuote = memo(forwardRef<SVGSVGElement, TextQuoteProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextQuoteBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TextQuoteBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TextQuoteFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TextQuoteFill ref={ref} {...rest} />;
  if (duotone) return <TextQuoteRegularDuotone ref={ref} {...rest} />;
  return <TextQuoteRegular ref={ref} {...rest} />;
}));

TextQuote.displayName = 'TextQuote';

// Triple export pattern (lucide-react style)
export { TextQuote, TextQuote as TextQuoteIcon, TextQuote as SiTextQuote };
export default TextQuote;
