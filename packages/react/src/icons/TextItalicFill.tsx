import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextItalicFillProps = Omit<IconBaseProps, 'children'>;

const TextItalicFill = memo(
  forwardRef<SVGSVGElement, TextItalicFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M20 1.5a1.5 1.5 0 0 1 0 3h-2.12a2.5 2.5 0 0 0-2.37 1.7l-3.77 11.33a1.5 1.5 0 0 0 1.42 1.97H14a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3h2.12a2.5 2.5 0 0 0 2.37-1.7l3.77-11.33a1.5 1.5 0 0 0-1.42-1.97H10a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

TextItalicFill.displayName = 'TextItalicFill';

export { TextItalicFill };
export type { TextItalicFillProps };
