import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextStrikethroughFillProps = Omit<IconBaseProps, 'children'>;

const TextStrikethroughFill = memo(
  forwardRef<SVGSVGElement, TextStrikethroughFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-strikethrough-fill" {...props}>
      <path d="M17 2.5a1.5 1.5 0 0 1 0 3h-6a2.5 2.5 0 0 0 0 5h10a1.5 1.5 0 0 1 0 3h-2.1q.58 1.14.6 2.5a5.5 5.5 0 0 1-5.5 5.5H7a1.5 1.5 0 0 1 0-3h7a2.5 2.5 0 0 0 0-5H3a1.5 1.5 0 0 1 0-3h3.1Q5.52 9.36 5.5 8A5.5 5.5 0 0 1 11 2.5z" />
    </IconBase>
  ))
);

TextStrikethroughFill.displayName = 'TextStrikethroughFill';

// Triple export pattern (lucide-react style)
export { TextStrikethroughFill, TextStrikethroughFill as TextStrikethroughFillIcon, TextStrikethroughFill as SiTextStrikethroughFill };
export default TextStrikethroughFill;
export type { TextStrikethroughFillProps };
