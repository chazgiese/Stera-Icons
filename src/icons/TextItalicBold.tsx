import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextItalicBoldProps = Omit<IconBaseProps, 'children'>;

const TextItalicBold = memo(
  forwardRef<SVGSVGElement, TextItalicBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-italic-bold" {...props}>
      <path fill="currentColor" d="M20 2a1 1 0 1 1 0 2h-2.84a2 2 0 0 0-1.9 1.37l-4.4 13.23-.03.08a1 1 0 0 0 .94 1.32H14a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h2.84a2 2 0 0 0 1.88-1.34l4.45-13.35A1 1 0 0 0 12.23 4H10a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextItalicBold.displayName = 'TextItalicBold';

// Triple export pattern (lucide-react style)
export { TextItalicBold, TextItalicBold as TextItalicBoldIcon, TextItalicBold as SiTextItalicBold };
export default TextItalicBold;
export type { TextItalicBoldProps };
