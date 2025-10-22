import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { HashItalicIcon as RegularHashItalicIcon } from './hash-italic';
import { HashItalicIconBold } from './hash-italic-bold';
import { HashItalicIconFilled } from './hash-italic-filled';
import { HashItalicIconFilltone } from './hash-italic-filltone';
import { HashItalicIconLinetone } from './hash-italic-linetone';

export interface HashItalicIconProps extends IconProps {
  variant?: IconVariant;
}

const HashItalicIcon = memo(forwardRef<SVGSVGElement, HashItalicIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HashItalicIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HashItalicIconBold ref={ref} {...props} />;
    case 'filltone':
      return <HashItalicIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <HashItalicIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularHashItalicIcon ref={ref} {...props} />;
  }
}));

HashItalicIcon.displayName = 'HashItalicIcon';

export { HashItalicIcon };
