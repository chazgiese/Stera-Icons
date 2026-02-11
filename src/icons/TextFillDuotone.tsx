import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextFillDuotone = memo(
  forwardRef<SVGSVGElement, TextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-fill-duotone" {...props}>
      <path d="M14 5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h-4a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5z" opacity={.4} />
        <path d="M15 18.5a1.5 1.5 0 0 1 0 3H9a1.5 1.5 0 0 1 0-3zM17 2.5A3.5 3.5 0 0 1 20.5 6a1.5 1.5 0 0 1-3 0 .5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5 1.5 1.5 0 1 1-3 0A3.5 3.5 0 0 1 7 2.5z" />
    </IconBase>
  ))
);

TextFillDuotone.displayName = 'TextFillDuotone';

// Triple export pattern (lucide-react style)
export { TextFillDuotone, TextFillDuotone as TextFillDuotoneIcon, TextFillDuotone as SiTextFillDuotone };
export default TextFillDuotone;
export type { TextFillDuotoneProps };
