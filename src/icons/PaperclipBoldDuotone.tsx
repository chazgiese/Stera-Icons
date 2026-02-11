import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PaperclipBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PaperclipBoldDuotone = memo(
  forwardRef<SVGSVGElement, PaperclipBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="paperclip-bold-duotone" {...props}>
      <path d="M8 6.5V16a4 4 0 0 0 8 0V8a1 1 0 1 1 2 0v8a6 6 0 0 1-12 0V6.5a1 1 0 0 0 2 0" opacity={.4} />
        <path d="M10.5 2A4.5 4.5 0 0 1 15 6.5V14a3 3 0 1 1-6 0V8a1 1 0 0 1 2 0v6a1 1 0 1 0 2 0V6.5a2.5 2.5 0 0 0-5 0 1 1 0 0 1-2 0A4.5 4.5 0 0 1 10.5 2" />
    </IconBase>
  ))
);

PaperclipBoldDuotone.displayName = 'PaperclipBoldDuotone';

// Triple export pattern (lucide-react style)
export { PaperclipBoldDuotone, PaperclipBoldDuotone as PaperclipBoldDuotoneIcon, PaperclipBoldDuotone as SiPaperclipBoldDuotone };
export default PaperclipBoldDuotone;
export type { PaperclipBoldDuotoneProps };
