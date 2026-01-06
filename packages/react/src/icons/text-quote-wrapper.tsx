import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextQuoteIcon as RegularTextQuoteIcon } from './text-quote';
import { TextQuoteIconDuotone as TextQuoteIconDuotone } from './text-quote-duotone';
import { TextQuoteIconBold as TextQuoteIconBold } from './text-quote-bold';
import { TextQuoteIconBoldDuotone as TextQuoteIconBoldDuotone } from './text-quote-bold-duotone';
import { TextQuoteIconFill as TextQuoteIconFill } from './text-quote-fill';
import { TextQuoteIconFillDuotone as TextQuoteIconFillDuotone } from './text-quote-fill-duotone';

export interface TextQuoteIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TextQuoteIcon = memo(forwardRef<SVGSVGElement, TextQuoteIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextQuoteIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TextQuoteIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TextQuoteIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TextQuoteIconFill ref={ref} {...props} />;
  if (duotone) return <TextQuoteIconDuotone ref={ref} {...props} />;
  return <RegularTextQuoteIcon ref={ref} {...props} />;
}));

TextQuoteIcon.displayName = 'TextQuoteIcon';

export { TextQuoteIcon };
