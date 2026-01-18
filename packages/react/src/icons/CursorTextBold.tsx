import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorTextBoldProps = Omit<IconBaseProps, 'children'>;

const CursorTextBold = memo(
  forwardRef<SVGSVGElement, CursorTextBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M8 1a5 5 0 0 1 4 2 5 5 0 0 1 4-2h1a1 1 0 1 1 0 2h-1a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h1a1 1 0 1 1 0 2h-1a5 5 0 0 1-4-2 5 5 0 0 1-4 2H7a1 1 0 1 1 0-2h1a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H7a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

CursorTextBold.displayName = 'CursorTextBold';

// Triple export pattern (lucide-react style)
export { CursorTextBold, CursorTextBold as CursorTextBoldIcon, CursorTextBold as SiCursorTextBold };
export type { CursorTextBoldProps };
