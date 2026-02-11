import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextUnderlineFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextUnderlineFillDuotone = memo(
  forwardRef<SVGSVGElement, TextUnderlineFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-underline-fill-duotone" {...props}>
      <path d="M18 18.5a1.5 1.5 0 0 1 0 3H6a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path d="M17.5 2.5c.83 0 1.5.67 1.5 1.5v6.5a7 7 0 1 1-14 0V4a1.5 1.5 0 1 1 3 0v6.5a4 4 0 0 0 8 0V4c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

TextUnderlineFillDuotone.displayName = 'TextUnderlineFillDuotone';

// Triple export pattern (lucide-react style)
export { TextUnderlineFillDuotone, TextUnderlineFillDuotone as TextUnderlineFillDuotoneIcon, TextUnderlineFillDuotone as SiTextUnderlineFillDuotone };
export default TextUnderlineFillDuotone;
export type { TextUnderlineFillDuotoneProps };
