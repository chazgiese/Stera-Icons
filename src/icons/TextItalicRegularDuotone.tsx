import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextItalicRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextItalicRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextItalicRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-italic-duotone" {...props}>
      <path d="M17.08 4.75c-.94 0-1.78.58-2.1 1.46l-4.26 11.35c-.31.82.3 1.69 1.17 1.69H6.92c.94 0 1.78-.58 2.1-1.46l4.26-11.35c.31-.82-.3-1.69-1.17-1.69z" opacity={.4} />
        <path d="M14 19.25a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5zM19 3.25a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextItalicRegularDuotone.displayName = 'TextItalicRegularDuotone';

// Triple export pattern (lucide-react style)
export { TextItalicRegularDuotone, TextItalicRegularDuotone as TextItalicRegularDuotoneIcon, TextItalicRegularDuotone as SiTextItalicRegularDuotone };
export default TextItalicRegularDuotone;
export type { TextItalicRegularDuotoneProps };
