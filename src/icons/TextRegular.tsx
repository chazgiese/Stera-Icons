import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextRegularProps = Omit<IconBaseProps, 'children'>;

const TextRegular = memo(
  forwardRef<SVGSVGElement, TextRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="text" {...props}>
      <path d="M17 3.25A2.75 2.75 0 0 1 19.75 6a.75.75 0 0 1-1.5 0c0-.69-.56-1.25-1.25-1.25h-3c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h1a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h1c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25a.75.75 0 0 1-1.5 0A2.75 2.75 0 0 1 7 3.25z" />
    </IconBase>
  ))
);

TextRegular.displayName = 'TextRegular';

// Triple export pattern (lucide-react style)
export { TextRegular, TextRegular as TextRegularIcon, TextRegular as SiTextRegular };
export default TextRegular;
export type { TextRegularProps };
