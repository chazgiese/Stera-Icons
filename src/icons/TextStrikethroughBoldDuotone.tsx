import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextStrikethroughBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextStrikethroughBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextStrikethroughBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-strikethrough-bold-duotone" {...props}>
      <path d="M18 13a5 5 0 0 1-4 8H7a1 1 0 1 1 0-2h7a3 3 0 1 0 0-6zM17 3a1 1 0 1 1 0 2h-6a3 3 0 0 0 0 6H7a5 5 0 0 1 4-8z" opacity={0.4} />
        <path fill="currentColor" d="M21 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

TextStrikethroughBoldDuotone.displayName = 'TextStrikethroughBoldDuotone';

// Triple export pattern (lucide-react style)
export { TextStrikethroughBoldDuotone, TextStrikethroughBoldDuotone as TextStrikethroughBoldDuotoneIcon, TextStrikethroughBoldDuotone as SiTextStrikethroughBoldDuotone };
export default TextStrikethroughBoldDuotone;
export type { TextStrikethroughBoldDuotoneProps };
