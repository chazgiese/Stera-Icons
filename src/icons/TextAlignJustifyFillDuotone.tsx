import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignJustifyFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignJustifyFillDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignJustifyFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-justify-fill-duotone" {...props}>
      <path d="M21 10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path d="M21 16.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

TextAlignJustifyFillDuotone.displayName = 'TextAlignJustifyFillDuotone';

// Triple export pattern (lucide-react style)
export { TextAlignJustifyFillDuotone, TextAlignJustifyFillDuotone as TextAlignJustifyFillDuotoneIcon, TextAlignJustifyFillDuotone as SiTextAlignJustifyFillDuotone };
export default TextAlignJustifyFillDuotone;
export type { TextAlignJustifyFillDuotoneProps };
