import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorPointerBoldProps = Omit<IconBaseProps, 'children'>;

const CursorPointerBold = memo(
  forwardRef<SVGSVGElement, CursorPointerBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-pointer-bold" {...props}>
      <path fillRule="evenodd" d="M10.14 2a2.8 2.8 0 0 1 2.8 2.8v1.82a2.8 2.8 0 0 1 3.11 1.1q.59-.31 1.3-.32a2.8 2.8 0 0 1 2.8 2.8v3.6a8.2 8.2 0 0 1-16.27 1.47l-1.05-2.68a2.8 2.8 0 0 1 4.51-3.22V4.8a2.8 2.8 0 0 1 2.8-2.8m0 2a.8.8 0 0 0-.8.8v8.1a1 1 0 0 1-1.86.5L6 10.9v-.01a.8.8 0 0 0-1.1-.3.8.8 0 0 0-.3 1.1l.07.13 1.1 2.8.03.1.03.1a6.2 6.2 0 0 0 12.31-1.02v-3.6a.8.8 0 0 0-1.6-.08v1.43a1 1 0 0 1-2 0V9.3a.8.8 0 0 0-1.6-.08v1.88a1 1 0 0 1-2 0V4.8a.8.8 0 0 0-.8-.8" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorPointerBold.displayName = 'CursorPointerBold';

// Triple export pattern (lucide-react style)
export { CursorPointerBold, CursorPointerBold as CursorPointerBoldIcon, CursorPointerBold as SiCursorPointerBold };
export default CursorPointerBold;
export type { CursorPointerBoldProps };
