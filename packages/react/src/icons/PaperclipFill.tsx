import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PaperclipFillProps = Omit<IconBaseProps, 'children'>;

const PaperclipFill = memo(
  forwardRef<SVGSVGElement, PaperclipFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9.75.5C13.2.5 16 3.3 16 6.75v7.75a4 4 0 0 1-8 0V8a1.5 1.5 0 1 1 3 0v6.5a1 1 0 1 0 2 0V6.75a3.25 3.25 0 0 0-6.5 0V15a5.5 5.5 0 1 0 11 0V8a1.5 1.5 0 0 1 3 0v7a8.5 8.5 0 0 1-17 0V6.75C3.5 3.3 6.3.5 9.75.5" />
    </IconBase>
  ))
);

PaperclipFill.displayName = 'PaperclipFill';

export { PaperclipFill };
export type { PaperclipFillProps };
