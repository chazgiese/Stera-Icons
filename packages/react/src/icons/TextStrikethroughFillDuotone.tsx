import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextStrikethroughFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextStrikethroughFillDuotone = memo(
  forwardRef<SVGSVGElement, TextStrikethroughFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.7 13.5a6 6 0 0 1-5.2 9H7a1.5 1.5 0 0 1 0-3h6.5a3 3 0 1 0 0-6zM17 1.5a1.5 1.5 0 0 1 0 3h-5.5a3 3 0 0 0-.15 6H6.3a6 6 0 0 1 5.2-9z" opacity={0.4} />
        <path fill="currentColor" d="M22 10.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

TextStrikethroughFillDuotone.displayName = 'TextStrikethroughFillDuotone';

// Triple export pattern (lucide-react style)
export { TextStrikethroughFillDuotone, TextStrikethroughFillDuotone as TextStrikethroughFillDuotoneIcon, TextStrikethroughFillDuotone as SiTextStrikethroughFillDuotone };
export type { TextStrikethroughFillDuotoneProps };
