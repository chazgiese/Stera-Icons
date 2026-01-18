import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextQuoteRegular } from './TextQuoteRegular';
import { TextQuoteRegularDuotone } from './TextQuoteRegularDuotone';
import { TextQuoteBold } from './TextQuoteBold';
import { TextQuoteBoldDuotone } from './TextQuoteBoldDuotone';
import { TextQuoteFill } from './TextQuoteFill';
import { TextQuoteFillDuotone } from './TextQuoteFillDuotone';

export interface TextQuoteProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TextQuote with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { TextQuoteRegular } from 'stera-icons/TextQuoteRegular';
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

export { TextQuote };
