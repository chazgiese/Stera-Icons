import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextItalicRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextItalicRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextItalicRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-italic-duotone" {...props}>
      <path fill="currentColor" d="M16.44 3.75c-.54 0-1.01.34-1.18.85l-4.9 14.66c-.15.49.2.99.72.99H7.56c.54 0 1.01-.34 1.18-.85l4.9-14.66a.75.75 0 0 0-.72-.99z" opacity={.4} />
        <path fill="currentColor" d="M14 20.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5zM20 2.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextItalicRegularDuotone.displayName = 'TextItalicRegularDuotone';

// Triple export pattern (lucide-react style)
export { TextItalicRegularDuotone, TextItalicRegularDuotone as TextItalicRegularDuotoneIcon, TextItalicRegularDuotone as SiTextItalicRegularDuotone };
export default TextItalicRegularDuotone;
export type { TextItalicRegularDuotoneProps };
