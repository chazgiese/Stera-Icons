import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextStrikethroughFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextStrikethroughFillDuotone = memo(
  forwardRef<SVGSVGElement, TextStrikethroughFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-strikethrough-fill-duotone" {...props}>
      <path d="M18.9 13.5q.58 1.14.6 2.5a5.5 5.5 0 0 1-5.5 5.5H7a1.5 1.5 0 0 1 0-3h7a2.5 2.5 0 0 0 0-5zM17 2.5a1.5 1.5 0 0 1 0 3h-6a2.5 2.5 0 0 0 0 5H6.1Q5.52 9.36 5.5 8A5.5 5.5 0 0 1 11 2.5z" opacity={0.4} />
        <path d="M21 10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

TextStrikethroughFillDuotone.displayName = 'TextStrikethroughFillDuotone';

// Triple export pattern (lucide-react style)
export { TextStrikethroughFillDuotone, TextStrikethroughFillDuotone as TextStrikethroughFillDuotoneIcon, TextStrikethroughFillDuotone as SiTextStrikethroughFillDuotone };
export default TextStrikethroughFillDuotone;
export type { TextStrikethroughFillDuotoneProps };
