import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextBFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextBFillDuotone = memo(
  forwardRef<SVGSVGElement, TextBFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-b-fill-duotone" {...props}>
      <path fill="currentColor" d="M6 1.5h1.5v21H6A1.5 1.5 0 0 1 4.5 21V3c0-.83.67-1.5 1.5-1.5" opacity={.4} />
        <path fill="currentColor" d="M12.5 1.5a6 6 0 0 1 4.75 9.67A6 6 0 0 1 14.5 22.5h-7v-3h7a3 3 0 1 0 0-6h-7v-3h5a3 3 0 1 0 0-6h-5v-3z" />
    </IconBase>
  ))
);

TextBFillDuotone.displayName = 'TextBFillDuotone';

// Triple export pattern (lucide-react style)
export { TextBFillDuotone, TextBFillDuotone as TextBFillDuotoneIcon, TextBFillDuotone as SiTextBFillDuotone };
export default TextBFillDuotone;
export type { TextBFillDuotoneProps };
