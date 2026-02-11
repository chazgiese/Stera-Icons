import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignRightFillProps = Omit<IconBaseProps, 'children'>;

const TextAlignRightFill = memo(
  forwardRef<SVGSVGElement, TextAlignRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-right-fill" {...props}>
      <path d="M21 16.5a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 0 1 0-3zM21 10.5a1.5 1.5 0 0 1 0 3H11a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

TextAlignRightFill.displayName = 'TextAlignRightFill';

// Triple export pattern (lucide-react style)
export { TextAlignRightFill, TextAlignRightFill as TextAlignRightFillIcon, TextAlignRightFill as SiTextAlignRightFill };
export default TextAlignRightFill;
export type { TextAlignRightFillProps };
