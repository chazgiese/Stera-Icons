import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextStrikethroughBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextStrikethroughBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextStrikethroughBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-strikethrough-bold-duotone" {...props}>
      <path d="M17.74 13a5.5 5.5 0 0 1-4.24 9H7a1 1 0 1 1 0-2h6.5a3.5 3.5 0 1 0 0-7zM17 2a1 1 0 1 1 0 2h-5.5a3.5 3.5 0 0 0-.14 7h-4.1a5.5 5.5 0 0 1 4.25-9z" opacity={0.4} />
        <path fill="currentColor" d="M22 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

TextStrikethroughBoldDuotone.displayName = 'TextStrikethroughBoldDuotone';

// Triple export pattern (lucide-react style)
export { TextStrikethroughBoldDuotone, TextStrikethroughBoldDuotone as TextStrikethroughBoldDuotoneIcon, TextStrikethroughBoldDuotone as SiTextStrikethroughBoldDuotone };
export default TextStrikethroughBoldDuotone;
export type { TextStrikethroughBoldDuotoneProps };
