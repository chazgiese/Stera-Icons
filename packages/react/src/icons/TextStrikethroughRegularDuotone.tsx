import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextStrikethroughRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextStrikethroughRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextStrikethroughRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.17 12.75a5.23 5.23 0 0 1-3.67 9H7a.75.75 0 0 1 0-1.5h6.5a3.75 3.75 0 1 0 0-7.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M11.33 11.25h-3.5a5.23 5.23 0 0 1 3.67-9H17a.75.75 0 0 1 0 1.5h-5.5a3.75 3.75 0 0 0-.17 7.5" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M22 11.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextStrikethroughRegularDuotone.displayName = 'TextStrikethroughRegularDuotone';

// Triple export pattern (lucide-react style)
export { TextStrikethroughRegularDuotone, TextStrikethroughRegularDuotone as TextStrikethroughRegularDuotoneIcon, TextStrikethroughRegularDuotone as SiTextStrikethroughRegularDuotone };
export type { TextStrikethroughRegularDuotoneProps };
