import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorPointerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorPointerBoldDuotone = memo(
  forwardRef<SVGSVGElement, CursorPointerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M20.99 14.46A9 9 0 0 1 3.14 15.6l.04.1a1 1 0 0 0 1.92-.52A7 7 0 0 0 19 14v.1a1 1 0 0 0 2-.1z" opacity={.4} />
        <path fill="currentColor" d="M10 1a3 3 0 0 1 3 3v2.17a3 3 0 0 1 3.53 1.22Q17.18 7 18 7a3 3 0 0 1 3 3v4a1 1 0 1 1-2 0v-4a1 1 0 1 0-2 0v1.5a1 1 0 1 1-2 0V9a1 1 0 1 0-2 0v2a1 1 0 1 1-2 0V4a1 1 0 1 0-2 0v9a1 1 0 0 1-1.86.5l-1.65-2.79a1 1 0 0 0-1.37-.37 1 1 0 0 0-.41 1.28l.04.09.07.13 1.22 3.12a1 1 0 1 1-1.86.73l-1.2-3.06A3 3 0 0 1 7 9.38V4a3 3 0 0 1 3-3" />
    </IconBase>
  ))
);

CursorPointerBoldDuotone.displayName = 'CursorPointerBoldDuotone';

// Triple export pattern (lucide-react style)
export { CursorPointerBoldDuotone, CursorPointerBoldDuotone as CursorPointerBoldDuotoneIcon, CursorPointerBoldDuotone as SiCursorPointerBoldDuotone };
export type { CursorPointerBoldDuotoneProps };
