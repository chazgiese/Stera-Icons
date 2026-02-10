import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextItalicFillProps = Omit<IconBaseProps, 'children'>;

const TextItalicFill = memo(
  forwardRef<SVGSVGElement, TextItalicFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-italic-fill" {...props}>
      <path fill="currentColor" d="M19 2.5a1.5 1.5 0 0 1 0 3h-1.92a1.5 1.5 0 0 0-1.4.97l-4.19 11.16-.07.2a.5.5 0 0 0 .47.67H14a1.5 1.5 0 0 1 0 3H5a1.5 1.5 0 0 1 0-3h1.92a1.5 1.5 0 0 0 1.4-.97L12.6 6.17a.5.5 0 0 0-.48-.67H10a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

TextItalicFill.displayName = 'TextItalicFill';

// Triple export pattern (lucide-react style)
export { TextItalicFill, TextItalicFill as TextItalicFillIcon, TextItalicFill as SiTextItalicFill };
export default TextItalicFill;
export type { TextItalicFillProps };
