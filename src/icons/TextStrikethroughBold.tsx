import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextStrikethroughBoldProps = Omit<IconBaseProps, 'children'>;

const TextStrikethroughBold = memo(
  forwardRef<SVGSVGElement, TextStrikethroughBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-strikethrough-bold" {...props}>
      <path fill="currentColor" d="M17 2a1 1 0 1 1 0 2h-5.5a3.5 3.5 0 0 0-.14 7H22a1 1 0 1 1 0 2h-4.26a5.5 5.5 0 0 1-4.24 9H7a1 1 0 1 1 0-2h6.5a3.5 3.5 0 1 0 0-7H2a1 1 0 1 1 0-2h5.25a5.5 5.5 0 0 1 4.25-9z" />
    </IconBase>
  ))
);

TextStrikethroughBold.displayName = 'TextStrikethroughBold';

// Triple export pattern (lucide-react style)
export { TextStrikethroughBold, TextStrikethroughBold as TextStrikethroughBoldIcon, TextStrikethroughBold as SiTextStrikethroughBold };
export default TextStrikethroughBold;
export type { TextStrikethroughBoldProps };
