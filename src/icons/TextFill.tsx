import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextFillProps = Omit<IconBaseProps, 'children'>;

const TextFill = memo(
  forwardRef<SVGSVGElement, TextFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-fill" {...props}>
      <path fill="currentColor" d="M17 2.5A3.5 3.5 0 0 1 20.5 6a1.5 1.5 0 0 1-3 0 .5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h1a1.5 1.5 0 0 1 0 3H9a1.5 1.5 0 0 1 0-3h1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5 1.5 1.5 0 1 1-3 0A3.5 3.5 0 0 1 7 2.5z" />
    </IconBase>
  ))
);

TextFill.displayName = 'TextFill';

// Triple export pattern (lucide-react style)
export { TextFill, TextFill as TextFillIcon, TextFill as SiTextFill };
export default TextFill;
export type { TextFillProps };
