import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PaperclipBoldProps = Omit<IconBaseProps, 'children'>;

const PaperclipBold = memo(
  forwardRef<SVGSVGElement, PaperclipBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M10 1a5 5 0 0 1 5 5v9a3 3 0 1 1-6 0V8a1 1 0 0 1 2 0v7a1 1 0 1 0 2 0V6a3 3 0 1 0-6 0v10a5 5 0 0 0 10 0V8a1 1 0 1 1 2 0v8a7 7 0 1 1-14 0V6a5 5 0 0 1 5-5" />
    </IconBase>
  ))
);

PaperclipBold.displayName = 'PaperclipBold';

export { PaperclipBold };
export type { PaperclipBoldProps };
