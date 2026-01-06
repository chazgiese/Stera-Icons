import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HashItalicIcon as RegularHashItalicIcon } from './hash-italic';
import { HashItalicIconDuotone as HashItalicIconDuotone } from './hash-italic-duotone';
import { HashItalicIconBold as HashItalicIconBold } from './hash-italic-bold';
import { HashItalicIconBoldDuotone as HashItalicIconBoldDuotone } from './hash-italic-bold-duotone';
import { HashItalicIconFill as HashItalicIconFill } from './hash-italic-fill';
import { HashItalicIconFillDuotone as HashItalicIconFillDuotone } from './hash-italic-fill-duotone';

export interface HashItalicIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const HashItalicIcon = memo(forwardRef<SVGSVGElement, HashItalicIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <HashItalicIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <HashItalicIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <HashItalicIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <HashItalicIconFill ref={ref} {...props} />;
  if (duotone) return <HashItalicIconDuotone ref={ref} {...props} />;
  return <RegularHashItalicIcon ref={ref} {...props} />;
}));

HashItalicIcon.displayName = 'HashItalicIcon';

export { HashItalicIcon };
