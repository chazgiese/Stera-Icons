import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-right-bold-duotone" {...props}>
      <path fill="currentColor" d="M21 11a1 1 0 1 1 0 2H11a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M21 17a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zM21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextAlignRightBoldDuotone.displayName = 'TextAlignRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { TextAlignRightBoldDuotone, TextAlignRightBoldDuotone as TextAlignRightBoldDuotoneIcon, TextAlignRightBoldDuotone as SiTextAlignRightBoldDuotone };
export default TextAlignRightBoldDuotone;
export type { TextAlignRightBoldDuotoneProps };
