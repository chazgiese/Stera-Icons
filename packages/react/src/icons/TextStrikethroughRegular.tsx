import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextStrikethroughRegularProps = Omit<IconBaseProps, 'children'>;

const TextStrikethroughRegular = memo(
  forwardRef<SVGSVGElement, TextStrikethroughRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M17 2.25a.75.75 0 0 1 0 1.5h-5.5a3.75 3.75 0 0 0-.15 7.5H22a.75.75 0 0 1 0 1.5h-4.83a5.23 5.23 0 0 1-3.67 9H7a.75.75 0 0 1 0-1.5h6.5a3.75 3.75 0 1 0 0-7.5H2a.75.75 0 0 1 0-1.5h5.82a5.23 5.23 0 0 1 3.68-9z" />
    </IconBase>
  ))
);

TextStrikethroughRegular.displayName = 'TextStrikethroughRegular';

// Triple export pattern (lucide-react style)
export { TextStrikethroughRegular, TextStrikethroughRegular as TextStrikethroughRegularIcon, TextStrikethroughRegular as SiTextStrikethroughRegular };
export type { TextStrikethroughRegularProps };
