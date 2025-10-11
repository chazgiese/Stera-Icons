import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HashItalicIcon as HashItalicIconRegular } from './hash-italic';
import { HashItalicIconBold } from './hash-italic-bold';
import { HashItalicIconFilled } from './hash-italic-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <HashItalicIconRegular ref={ref} {...props} />;
  }
}));

HashItalicIcon.displayName = 'HashItalicIcon';

export { HashItalicIcon };
