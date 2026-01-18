import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextItalicBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextItalicBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextItalicBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.16 4a2 2 0 0 0-1.9 1.37l-.19.57-4.23 12.7-.01.04a1 1 0 0 0 .94 1.32H6.84a2 2 0 0 0 1.9-1.37l4.28-12.86.15-.46A1 1 0 0 0 12.23 4z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M14 20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM20 2a1 1 0 1 1 0 2H10a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextItalicBoldDuotone.displayName = 'TextItalicBoldDuotone';

export { TextItalicBoldDuotone };
export type { TextItalicBoldDuotoneProps };
