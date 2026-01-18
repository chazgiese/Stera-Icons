import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { QuoteOpeningIcon as RegularQuoteOpeningIcon } from './quote-opening';
import { QuoteOpeningIconDuotone as QuoteOpeningIconDuotone } from './quote-opening-duotone';
import { QuoteOpeningIconBold as QuoteOpeningIconBold } from './quote-opening-bold';
import { QuoteOpeningIconBoldDuotone as QuoteOpeningIconBoldDuotone } from './quote-opening-bold-duotone';
import { QuoteOpeningIconFill as QuoteOpeningIconFill } from './quote-opening-fill';
import { QuoteOpeningIconFillDuotone as QuoteOpeningIconFillDuotone } from './quote-opening-fill-duotone';

export interface QuoteOpeningIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const QuoteOpeningIcon = memo(forwardRef<SVGSVGElement, QuoteOpeningIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <QuoteOpeningIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <QuoteOpeningIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <QuoteOpeningIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <QuoteOpeningIconFill ref={ref} {...props} />;
  if (duotone) return <QuoteOpeningIconDuotone ref={ref} {...props} />;
  return <RegularQuoteOpeningIcon ref={ref} {...props} />;
}));

QuoteOpeningIcon.displayName = 'QuoteOpeningIcon';

export { QuoteOpeningIcon };
