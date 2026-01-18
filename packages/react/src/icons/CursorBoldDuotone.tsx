import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorBoldDuotone = memo(
  forwardRef<SVGSVGElement, CursorBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5.04 4.3 5 4.35l.01.08 5.24 15.71q.02.07.05.08l.08.02q.07 0 .1-.03l.03-.06 1.39-6.54a3 3 0 0 1 .81-1.5l.08-.08 1.42 1.42-.08.08a1 1 0 0 0-.27.5l-1.4 6.6-.02.07a2.14 2.14 0 0 1-4.1.07L3.12 5.08a2.1 2.1 0 0 1 .52-2.2z" opacity={.4} />
        <path fill="currentColor" d="M3.63 2.88c.53-.53 1.36-.8 2.2-.52l15.7 5.24a2.14 2.14 0 0 1-.07 4.09c-1.38.4-2.48.59-3.52.76-1.03.16-2 .3-3.19.63a1 1 0 0 0-.4.24l-.14.14-1.42-1.42.14-.14q.54-.54 1.3-.75c1.31-.36 2.38-.52 3.4-.68a24 24 0 0 0 3.34-.75l.03-.09-.02-.08q-.01-.02-.08-.05L5.2 4.26h-.08l-.07.03z" />
    </IconBase>
  ))
);

CursorBoldDuotone.displayName = 'CursorBoldDuotone';

// Triple export pattern (lucide-react style)
export { CursorBoldDuotone, CursorBoldDuotone as CursorBoldDuotoneIcon, CursorBoldDuotone as SiCursorBoldDuotone };
export type { CursorBoldDuotoneProps };
