import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorPointerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorPointerBoldDuotone = memo(
  forwardRef<SVGSVGElement, CursorPointerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-pointer-bold-duotone" {...props}>
      <path fill="currentColor" d="M5.83 14.82a6.2 6.2 0 0 0 12.3-.7l.01-.32a1 1 0 1 0 2 0 8.2 8.2 0 0 1-16.26 1.47l.03.09a1 1 0 0 0 1.92-.54" opacity={.4} />
        <path fill="currentColor" d="M10.14 2a2.8 2.8 0 0 1 2.8 2.8v1.82a2.8 2.8 0 0 1 3.11 1.1q.59-.31 1.3-.32a2.8 2.8 0 0 1 2.8 2.8v3.6a1 1 0 0 1-2 0v-3.6a.8.8 0 0 0-1.6 0v1.35a1 1 0 0 1-2 0V9.3a.8.8 0 0 0-1.6-.08v1.88a1 1 0 0 1-2 0V4.8a.8.8 0 0 0-1.6 0v8.1a1 1 0 0 1-1.87.5L6 10.9v-.01a.8.8 0 0 0-1.1-.3.8.8 0 0 0-.3 1.1l.07.13 1.1 2.8a1 1 0 0 1-1.86.74l-1.08-2.77a2.8 2.8 0 0 1 4.51-3.22V4.8a2.8 2.8 0 0 1 2.8-2.8" />
    </IconBase>
  ))
);

CursorPointerBoldDuotone.displayName = 'CursorPointerBoldDuotone';

// Triple export pattern (lucide-react style)
export { CursorPointerBoldDuotone, CursorPointerBoldDuotone as CursorPointerBoldDuotoneIcon, CursorPointerBoldDuotone as SiCursorPointerBoldDuotone };
export default CursorPointerBoldDuotone;
export type { CursorPointerBoldDuotoneProps };
