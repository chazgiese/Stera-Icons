import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextRegularProps = Omit<IconBaseProps, 'children'>;

const TextRegular = memo(
  forwardRef<SVGSVGElement, TextRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="text" {...props}>
      <path fill="currentColor" d="M18 2.25A2.75 2.75 0 0 1 20.75 5v1a.75.75 0 0 1-1.5 0V5c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h1a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h1c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25v1a.75.75 0 0 1-1.5 0V5A2.75 2.75 0 0 1 6 2.25z" />
    </IconBase>
  ))
);

TextRegular.displayName = 'TextRegular';

// Triple export pattern (lucide-react style)
export { TextRegular, TextRegular as TextRegularIcon, TextRegular as SiTextRegular };
export type { TextRegularProps };
