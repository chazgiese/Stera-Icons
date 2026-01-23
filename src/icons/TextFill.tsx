import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextFillProps = Omit<IconBaseProps, 'children'>;

const TextFill = memo(
  forwardRef<SVGSVGElement, TextFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-fill" {...props}>
      <path fill="currentColor" d="M18 1.5A3.5 3.5 0 0 1 21.5 5v1a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v14c0 .28.22.5.5.5h1a1.5 1.5 0 0 1 0 3H9a1.5 1.5 0 0 1 0-3h1a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0-.5.5v1a1.5 1.5 0 1 1-3 0V5A3.5 3.5 0 0 1 6 1.5z" />
    </IconBase>
  ))
);

TextFill.displayName = 'TextFill';

// Triple export pattern (lucide-react style)
export { TextFill, TextFill as TextFillIcon, TextFill as SiTextFill };
export default TextFill;
export type { TextFillProps };
