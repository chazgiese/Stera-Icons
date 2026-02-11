import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextItalicRegularProps = Omit<IconBaseProps, 'children'>;

const TextItalicRegular = memo(
  forwardRef<SVGSVGElement, TextItalicRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-italic" {...props}>
      <path d="M19 3.25a.75.75 0 0 1 0 1.5h-1.92c-.94 0-1.78.58-2.1 1.46l-4.26 11.35c-.31.82.3 1.69 1.17 1.69H14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h1.92c.94 0 1.78-.58 2.1-1.46l4.26-11.35c.31-.82-.3-1.69-1.17-1.69H10a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextItalicRegular.displayName = 'TextItalicRegular';

// Triple export pattern (lucide-react style)
export { TextItalicRegular, TextItalicRegular as TextItalicRegularIcon, TextItalicRegular as SiTextItalicRegular };
export default TextItalicRegular;
export type { TextItalicRegularProps };
