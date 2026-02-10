import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PaperclipFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PaperclipFillDuotone = memo(
  forwardRef<SVGSVGElement, PaperclipFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="paperclip-fill-duotone" {...props}>
      <path fill="currentColor" d="M18 6.5c.83 0 1.5.67 1.5 1.5v7a7.5 7.5 0 0 1-15 0V7a1.5 1.5 0 1 0 3 0v8a4.5 4.5 0 1 0 9 0V8c0-.83.67-1.5 1.5-1.5" opacity={.4} />
        <path fill="currentColor" d="M10 1.5A5.5 5.5 0 0 1 15.5 7v7a3.5 3.5 0 1 1-7 0V8a1.5 1.5 0 1 1 3 0v6a.5.5 0 0 0 1 0V7a2.5 2.5 0 0 0-5 0 1.5 1.5 0 1 1-3 0A5.5 5.5 0 0 1 10 1.5" />
    </IconBase>
  ))
);

PaperclipFillDuotone.displayName = 'PaperclipFillDuotone';

// Triple export pattern (lucide-react style)
export { PaperclipFillDuotone, PaperclipFillDuotone as PaperclipFillDuotoneIcon, PaperclipFillDuotone as SiPaperclipFillDuotone };
export default PaperclipFillDuotone;
export type { PaperclipFillDuotoneProps };
