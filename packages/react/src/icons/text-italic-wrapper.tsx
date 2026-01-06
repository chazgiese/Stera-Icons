import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextItalicIcon as RegularTextItalicIcon } from './text-italic';
import { TextItalicIconDuotone as TextItalicIconDuotone } from './text-italic-duotone';
import { TextItalicIconBold as TextItalicIconBold } from './text-italic-bold';
import { TextItalicIconBoldDuotone as TextItalicIconBoldDuotone } from './text-italic-bold-duotone';
import { TextItalicIconFill as TextItalicIconFill } from './text-italic-fill';
import { TextItalicIconFillDuotone as TextItalicIconFillDuotone } from './text-italic-fill-duotone';

export interface TextItalicIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TextItalicIcon = memo(forwardRef<SVGSVGElement, TextItalicIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextItalicIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TextItalicIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TextItalicIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TextItalicIconFill ref={ref} {...props} />;
  if (duotone) return <TextItalicIconDuotone ref={ref} {...props} />;
  return <RegularTextItalicIcon ref={ref} {...props} />;
}));

TextItalicIcon.displayName = 'TextItalicIcon';

export { TextItalicIcon };
