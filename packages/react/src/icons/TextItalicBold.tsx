import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextItalicBoldProps = Omit<IconBaseProps, 'children'>;

const TextItalicBold = memo(
  forwardRef<SVGSVGElement, TextItalicBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M20 2a1 1 0 1 1 0 2h-2.84a2 2 0 0 0-1.9 1.37l-4.4 13.23-.03.08a1 1 0 0 0 .94 1.32H14a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h2.84a2 2 0 0 0 1.88-1.34l4.45-13.35A1 1 0 0 0 12.23 4H10a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextItalicBold.displayName = 'TextItalicBold';

export { TextItalicBold };
export type { TextItalicBoldProps };
