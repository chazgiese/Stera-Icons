import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PaperclipFillProps = Omit<IconBaseProps, 'children'>;

const PaperclipFill = memo(
  forwardRef<SVGSVGElement, PaperclipFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="paperclip-fill" {...props}>
      <path d="M10 1.5A5.5 5.5 0 0 1 15.5 7v7a3.5 3.5 0 1 1-7 0V8a1.5 1.5 0 1 1 3 0v6a.5.5 0 0 0 1 0V7a2.5 2.5 0 0 0-5 0v8a4.5 4.5 0 1 0 9 0V8a1.5 1.5 0 0 1 3 0v7a7.5 7.5 0 0 1-15 0V7A5.5 5.5 0 0 1 10 1.5" />
    </IconBase>
  ))
);

PaperclipFill.displayName = 'PaperclipFill';

// Triple export pattern (lucide-react style)
export { PaperclipFill, PaperclipFill as PaperclipFillIcon, PaperclipFill as SiPaperclipFill };
export default PaperclipFill;
export type { PaperclipFillProps };
