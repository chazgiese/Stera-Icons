import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextItalicRegularProps = Omit<IconBaseProps, 'children'>;

const TextItalicRegular = memo(
  forwardRef<SVGSVGElement, TextItalicRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-italic" {...props}>
      <path fill="currentColor" d="M20 2.25a.75.75 0 0 1 0 1.5h-3.56c-.53 0-1 .34-1.18.85l-4.9 14.68c-.15.48.21.97.72.97H14a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5h3.56c.54 0 1.01-.34 1.18-.85l4.9-14.68a.75.75 0 0 0-.72-.97H10a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextItalicRegular.displayName = 'TextItalicRegular';

// Triple export pattern (lucide-react style)
export { TextItalicRegular, TextItalicRegular as TextItalicRegularIcon, TextItalicRegular as SiTextItalicRegular };
export type { TextItalicRegularProps };
