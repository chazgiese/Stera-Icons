import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TextQuoteIcon as RegularTextQuoteIcon } from './text-quote';
import { TextQuoteIconBold } from './text-quote-bold';
import { TextQuoteIconFilled } from './text-quote-filled';
import { TextQuoteIconFilltone } from './text-quote-filltone';
import { TextQuoteIconLinetone } from './text-quote-linetone';

export interface TextQuoteIconProps extends IconProps {
  variant?: IconVariant;
}

const TextQuoteIcon = memo(forwardRef<SVGSVGElement, TextQuoteIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TextQuoteIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TextQuoteIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TextQuoteIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TextQuoteIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularTextQuoteIcon ref={ref} {...props} />;
  }
}));

TextQuoteIcon.displayName = 'TextQuoteIcon';

export { TextQuoteIcon };
