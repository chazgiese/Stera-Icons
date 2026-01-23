import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextUnderlineFillProps = Omit<IconBaseProps, 'children'>;

const TextUnderlineFill = memo(
  forwardRef<SVGSVGElement, TextUnderlineFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-underline-fill" {...props}>
      <path fill="currentColor" d="M19 20.5a1.5 1.5 0 0 1 0 3H5a1.5 1.5 0 0 1 0-3zM18 .5c.83 0 1.5.67 1.5 1.5v9a7.5 7.5 0 0 1-14.99.39L4.5 11V2a1.5 1.5 0 1 1 3 0v9.23a4.5 4.5 0 0 0 9-.23V2c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

TextUnderlineFill.displayName = 'TextUnderlineFill';

// Triple export pattern (lucide-react style)
export { TextUnderlineFill, TextUnderlineFill as TextUnderlineFillIcon, TextUnderlineFill as SiTextUnderlineFill };
export default TextUnderlineFill;
export type { TextUnderlineFillProps };
