import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextStrikethroughBoldProps = Omit<IconBaseProps, 'children'>;

const TextStrikethroughBold = memo(
  forwardRef<SVGSVGElement, TextStrikethroughBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-strikethrough-bold" {...props}>
      <path d="M17 3a1 1 0 1 1 0 2h-6a3 3 0 0 0 0 6h10a1 1 0 1 1 0 2h-3a5 5 0 0 1-4 8H7a1 1 0 1 1 0-2h7a3 3 0 1 0 0-6H3a1 1 0 1 1 0-2h4a5 5 0 0 1 4-8z" />
    </IconBase>
  ))
);

TextStrikethroughBold.displayName = 'TextStrikethroughBold';

// Triple export pattern (lucide-react style)
export { TextStrikethroughBold, TextStrikethroughBold as TextStrikethroughBoldIcon, TextStrikethroughBold as SiTextStrikethroughBold };
export default TextStrikethroughBold;
export type { TextStrikethroughBoldProps };
