import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextStrikethroughRegularProps = Omit<IconBaseProps, 'children'>;

const TextStrikethroughRegular = memo(
  forwardRef<SVGSVGElement, TextStrikethroughRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-strikethrough" {...props}>
      <path d="M17 3.25a.75.75 0 0 1 0 1.5h-6a3.25 3.25 0 1 0 0 6.5h10a.75.75 0 0 1 0 1.5h-3.54a4.73 4.73 0 0 1-3.46 8H7a.75.75 0 0 1 0-1.5h7a3.25 3.25 0 0 0 0-6.5H3a.75.75 0 0 1 0-1.5h4.54a4.73 4.73 0 0 1 3.46-8z" />
    </IconBase>
  ))
);

TextStrikethroughRegular.displayName = 'TextStrikethroughRegular';

// Triple export pattern (lucide-react style)
export { TextStrikethroughRegular, TextStrikethroughRegular as TextStrikethroughRegularIcon, TextStrikethroughRegular as SiTextStrikethroughRegular };
export default TextStrikethroughRegular;
export type { TextStrikethroughRegularProps };
