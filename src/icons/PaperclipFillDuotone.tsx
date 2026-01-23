import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PaperclipFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PaperclipFillDuotone = memo(
  forwardRef<SVGSVGElement, PaperclipFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="paperclip-fill-duotone" {...props}>
      <path fill="currentColor" d="M9.75.5C13.2.5 16 3.3 16 6.75v7.75a4 4 0 0 1-8 0V8a1.5 1.5 0 1 1 3 0v6.5a1 1 0 1 0 2 0V6.75c0-1.8-1.46-3.25-3.25-3.25z" opacity={.4} />
        <path fill="currentColor" d="M9.75 3.5A3.25 3.25 0 0 0 6.5 6.75V15a5.5 5.5 0 1 0 11 0V8a1.5 1.5 0 0 1 3 0v7a8.5 8.5 0 0 1-17 0V6.75C3.5 3.3 6.3.5 9.75.5z" />
    </IconBase>
  ))
);

PaperclipFillDuotone.displayName = 'PaperclipFillDuotone';

// Triple export pattern (lucide-react style)
export { PaperclipFillDuotone, PaperclipFillDuotone as PaperclipFillDuotoneIcon, PaperclipFillDuotone as SiPaperclipFillDuotone };
export default PaperclipFillDuotone;
export type { PaperclipFillDuotoneProps };
