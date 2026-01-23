import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignJustifyFillProps = Omit<IconBaseProps, 'children'>;

const TextAlignJustifyFill = memo(
  forwardRef<SVGSVGElement, TextAlignJustifyFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-justify-fill" {...props}>
      <path fill="currentColor" d="M21 16.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

TextAlignJustifyFill.displayName = 'TextAlignJustifyFill';

// Triple export pattern (lucide-react style)
export { TextAlignJustifyFill, TextAlignJustifyFill as TextAlignJustifyFillIcon, TextAlignJustifyFill as SiTextAlignJustifyFill };
export default TextAlignJustifyFill;
export type { TextAlignJustifyFillProps };
