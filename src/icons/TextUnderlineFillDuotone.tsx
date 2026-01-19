import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextUnderlineFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextUnderlineFillDuotone = memo(
  forwardRef<SVGSVGElement, TextUnderlineFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-underline-fill-duotone" {...props}>
      <path fill="currentColor" d="M19 20.5a1.5 1.5 0 0 1 0 3H5a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path fill="currentColor" d="M18 .5c.83 0 1.5.67 1.5 1.5v9a7.5 7.5 0 0 1-14.99.39L4.5 11V2a1.5 1.5 0 1 1 3 0v9.23a4.5 4.5 0 0 0 9-.23V2c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

TextUnderlineFillDuotone.displayName = 'TextUnderlineFillDuotone';

// Triple export pattern (lucide-react style)
export { TextUnderlineFillDuotone, TextUnderlineFillDuotone as TextUnderlineFillDuotoneIcon, TextUnderlineFillDuotone as SiTextUnderlineFillDuotone };
export default TextUnderlineFillDuotone;
export type { TextUnderlineFillDuotoneProps };
