import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextItalicBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextItalicBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextItalicBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-italic-bold-duotone" {...props}>
      <path d="M17.08 5a2 2 0 0 0-1.87 1.3l-.29.75-3.91 10.45-.06.15a1 1 0 0 0 .94 1.35H6.92a2 2 0 0 0 1.87-1.3l4.26-11.35A1 1 0 0 0 12.11 5z" opacity={.4} />
        <path d="M14 19a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2zM19 3a1 1 0 1 1 0 2h-9a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextItalicBoldDuotone.displayName = 'TextItalicBoldDuotone';

// Triple export pattern (lucide-react style)
export { TextItalicBoldDuotone, TextItalicBoldDuotone as TextItalicBoldDuotoneIcon, TextItalicBoldDuotone as SiTextItalicBoldDuotone };
export default TextItalicBoldDuotone;
export type { TextItalicBoldDuotoneProps };
