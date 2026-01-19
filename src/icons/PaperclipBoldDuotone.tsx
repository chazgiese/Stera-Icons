import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PaperclipBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PaperclipBoldDuotone = memo(
  forwardRef<SVGSVGElement, PaperclipBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="paperclip-bold-duotone" {...props}>
      <path fill="currentColor" d="M10 1a5 5 0 0 1 5 5v9a3 3 0 1 1-6 0V8a1 1 0 0 1 2 0v7a1 1 0 1 0 2 0V6a3 3 0 0 0-3-3z" opacity={.4} />
        <path fill="currentColor" d="M10 3a3 3 0 0 0-3 3v10a5 5 0 0 0 10 0V8a1 1 0 1 1 2 0v8a7 7 0 1 1-14 0V6a5 5 0 0 1 5-5z" />
    </IconBase>
  ))
);

PaperclipBoldDuotone.displayName = 'PaperclipBoldDuotone';

// Triple export pattern (lucide-react style)
export { PaperclipBoldDuotone, PaperclipBoldDuotone as PaperclipBoldDuotoneIcon, PaperclipBoldDuotone as SiPaperclipBoldDuotone };
export default PaperclipBoldDuotone;
export type { PaperclipBoldDuotoneProps };
