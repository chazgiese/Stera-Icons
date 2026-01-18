import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorClickBoldProps = Omit<IconBaseProps, 'children'>;

const CursorClickBold = memo(
  forwardRef<SVGSVGElement, CursorClickBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.1 10.32a1.76 1.76 0 0 1 2.22-2.23l10.47 3.5a1.76 1.76 0 0 1-.05 3.36l-4.48 1.31-1.31 4.48a1.76 1.76 0 0 1-3.37.05zm5.14 9.12 1.26-4.27.04-.12a1 1 0 0 1 .63-.55l4.27-1.26-9.3-3.1z" clipRule="evenodd" />
        <path fill="currentColor" d="M4.3 12.3a1 1 0 0 1 1.4 1.4l-1.4 1.42a1 1 0 1 1-1.42-1.41zM1.27 6.93a1 1 0 0 1 1.23-.7l1.93.51a1 1 0 0 1-.52 1.93l-1.93-.51a1 1 0 0 1-.7-1.23M13.7 2.88a1 1 0 0 1 1.42 1.41l-1.41 1.42a1 1 0 0 1-1.42-1.42zM6.93 1.27a1 1 0 0 1 1.22.7l.52 1.94a1 1 0 1 1-1.93.52L6.22 2.5a1 1 0 0 1 .71-1.23" />
    </IconBase>
  ))
);

CursorClickBold.displayName = 'CursorClickBold';

// Triple export pattern (lucide-react style)
export { CursorClickBold, CursorClickBold as CursorClickBoldIcon, CursorClickBold as SiCursorClickBold };
export type { CursorClickBoldProps };
