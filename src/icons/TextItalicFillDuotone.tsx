import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextItalicFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextItalicFillDuotone = memo(
  forwardRef<SVGSVGElement, TextItalicFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-italic-fill-duotone" {...props}>
      <path d="M17.08 5.5a1.5 1.5 0 0 0-1.4.97l-4.15 11.06-.11.3a.5.5 0 0 0 .47.67H6.92a1.5 1.5 0 0 0 1.4-.97L12.6 6.17a.5.5 0 0 0-.48-.67z" opacity={.4} />
        <path d="M14 18.5a1.5 1.5 0 0 1 0 3H5a1.5 1.5 0 0 1 0-3zM19 2.5a1.5 1.5 0 0 1 0 3h-9a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

TextItalicFillDuotone.displayName = 'TextItalicFillDuotone';

// Triple export pattern (lucide-react style)
export { TextItalicFillDuotone, TextItalicFillDuotone as TextItalicFillDuotoneIcon, TextItalicFillDuotone as SiTextItalicFillDuotone };
export default TextItalicFillDuotone;
export type { TextItalicFillDuotoneProps };
