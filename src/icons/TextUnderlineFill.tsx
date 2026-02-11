import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextUnderlineFillProps = Omit<IconBaseProps, 'children'>;

const TextUnderlineFill = memo(
  forwardRef<SVGSVGElement, TextUnderlineFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-underline-fill" {...props}>
      <path d="M18 18.5a1.5 1.5 0 0 1 0 3H6a1.5 1.5 0 0 1 0-3zM17.5 2.5c.83 0 1.5.67 1.5 1.5v6.5a7 7 0 1 1-14 0V4a1.5 1.5 0 1 1 3 0v6.5a4 4 0 0 0 8 0V4c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

TextUnderlineFill.displayName = 'TextUnderlineFill';

// Triple export pattern (lucide-react style)
export { TextUnderlineFill, TextUnderlineFill as TextUnderlineFillIcon, TextUnderlineFill as SiTextUnderlineFill };
export default TextUnderlineFill;
export type { TextUnderlineFillProps };
