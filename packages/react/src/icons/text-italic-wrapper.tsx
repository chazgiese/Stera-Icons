import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TextItalicIcon as RegularTextItalicIcon } from './text-italic';
import { TextItalicIconBold } from './text-italic-bold';
import { TextItalicIconFilled } from './text-italic-filled';
import { TextItalicIconFilltone } from './text-italic-filltone';
import { TextItalicIconLinetone } from './text-italic-linetone';

export interface TextItalicIconProps extends IconProps {
  variant?: IconVariant;
}

const TextItalicIcon = memo(forwardRef<SVGSVGElement, TextItalicIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TextItalicIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TextItalicIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TextItalicIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TextItalicIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularTextItalicIcon ref={ref} {...props} />;
  }
}));

TextItalicIcon.displayName = 'TextItalicIcon';

export { TextItalicIcon };
