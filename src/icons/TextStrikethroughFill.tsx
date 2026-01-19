import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextStrikethroughFillProps = Omit<IconBaseProps, 'children'>;

const TextStrikethroughFill = memo(
  forwardRef<SVGSVGElement, TextStrikethroughFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-strikethrough-fill" {...props}>
      <path fill="currentColor" d="M17 1.5a1.5 1.5 0 0 1 0 3h-5.5a3 3 0 0 0-.15 6H22a1.5 1.5 0 0 1 0 3h-3.3a6 6 0 0 1-5.2 9H7a1.5 1.5 0 0 1 0-3h6.5a3 3 0 1 0 0-6H2a1.5 1.5 0 0 1 0-3h4.3a6 6 0 0 1 5.2-9z" />
    </IconBase>
  ))
);

TextStrikethroughFill.displayName = 'TextStrikethroughFill';

// Triple export pattern (lucide-react style)
export { TextStrikethroughFill, TextStrikethroughFill as TextStrikethroughFillIcon, TextStrikethroughFill as SiTextStrikethroughFill };
export default TextStrikethroughFill;
export type { TextStrikethroughFillProps };
