import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { QuoteIcon as RegularQuoteIcon } from './quote';
import { QuoteIconDuotone as QuoteIconDuotone } from './quote-duotone';
import { QuoteIconBold as QuoteIconBold } from './quote-bold';
import { QuoteIconBoldDuotone as QuoteIconBoldDuotone } from './quote-bold-duotone';
import { QuoteIconFill as QuoteIconFill } from './quote-fill';
import { QuoteIconFillDuotone as QuoteIconFillDuotone } from './quote-fill-duotone';

export interface QuoteIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const QuoteIcon = memo(forwardRef<SVGSVGElement, QuoteIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <QuoteIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <QuoteIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <QuoteIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <QuoteIconFill ref={ref} {...props} />;
  if (duotone) return <QuoteIconDuotone ref={ref} {...props} />;
  return <RegularQuoteIcon ref={ref} {...props} />;
}));

QuoteIcon.displayName = 'QuoteIcon';

export { QuoteIcon };
