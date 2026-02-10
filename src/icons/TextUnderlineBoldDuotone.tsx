import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextUnderlineBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextUnderlineBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextUnderlineBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-underline-bold-duotone" {...props}>
      <path fill="currentColor" d="M18 19a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M17.5 3a1 1 0 0 1 1 1v7a6.5 6.5 0 1 1-13 0V4a1 1 0 0 1 2 0v7a4.5 4.5 0 1 0 9 0V4a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

TextUnderlineBoldDuotone.displayName = 'TextUnderlineBoldDuotone';

// Triple export pattern (lucide-react style)
export { TextUnderlineBoldDuotone, TextUnderlineBoldDuotone as TextUnderlineBoldDuotoneIcon, TextUnderlineBoldDuotone as SiTextUnderlineBoldDuotone };
export default TextUnderlineBoldDuotone;
export type { TextUnderlineBoldDuotoneProps };
