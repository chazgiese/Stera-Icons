import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorFillProps = Omit<IconBaseProps, 'children'>;

const CursorFill = memo(
  forwardRef<SVGSVGElement, CursorFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3.11 5.07a2.14 2.14 0 0 1 2.71-2.7L21.53 7.6c2 .66 1.94 3.5-.07 4.09l-6.97 2.05-2.05 6.97a2.14 2.14 0 0 1-4.1.08z" />
    </IconBase>
  ))
);

CursorFill.displayName = 'CursorFill';

export { CursorFill };
export type { CursorFillProps };
