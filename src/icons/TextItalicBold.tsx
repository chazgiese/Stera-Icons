import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextItalicBoldProps = Omit<IconBaseProps, 'children'>;

const TextItalicBold = memo(
  forwardRef<SVGSVGElement, TextItalicBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-italic-bold" {...props}>
      <path d="M19 3a1 1 0 1 1 0 2h-1.92a2 2 0 0 0-1.87 1.28l-4.27 11.38A1 1 0 0 0 11.9 19H14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h1.92a2 2 0 0 0 1.87-1.29l4.26-11.36A1 1 0 0 0 12.11 5H10a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextItalicBold.displayName = 'TextItalicBold';

// Triple export pattern (lucide-react style)
export { TextItalicBold, TextItalicBold as TextItalicBoldIcon, TextItalicBold as SiTextItalicBold };
export default TextItalicBold;
export type { TextItalicBoldProps };
