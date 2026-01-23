import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextItalicFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextItalicFillDuotone = memo(
  forwardRef<SVGSVGElement, TextItalicFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-italic-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.88 4.5a2.5 2.5 0 0 0-2.37 1.7l-3.77 11.33a1.5 1.5 0 0 0 1.42 1.97H6.12a2.5 2.5 0 0 0 2.37-1.7l3.77-11.33a1.5 1.5 0 0 0-1.42-1.97z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M14 19.5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zM20 1.5a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

TextItalicFillDuotone.displayName = 'TextItalicFillDuotone';

// Triple export pattern (lucide-react style)
export { TextItalicFillDuotone, TextItalicFillDuotone as TextItalicFillDuotoneIcon, TextItalicFillDuotone as SiTextItalicFillDuotone };
export default TextItalicFillDuotone;
export type { TextItalicFillDuotoneProps };
