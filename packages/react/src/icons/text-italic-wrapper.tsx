import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextItalicIcon as TextItalicIconRegular } from './text-italic';
import { TextItalicIconBold } from './text-italic-bold';
import { TextItalicIconFilled } from './text-italic-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <TextItalicIconRegular ref={ref} {...props} />;
  }
}));

TextItalicIcon.displayName = 'TextItalicIcon';

export { TextItalicIcon };
