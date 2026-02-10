import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorPointerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorPointerFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorPointerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-pointer-fill-duotone" {...props}>
      <path fill="currentColor" d="M10.14 4c.45 0 .8.36.8.8v6.3a1 1 0 1 0 2 0V9.22a.8.8 0 0 1 1.6.08v2.25a1 1 0 0 0 2 0v-1.43a.8.8 0 0 1 1.6.08v3.6a6.2 6.2 0 0 1-12.34.92l-.03-.1-1.1-2.8-.06-.13a.8.8 0 0 1 1.38-.8l1.5 2.52a1 1 0 0 0 1.85-.51V4.8c0-.44.36-.8.8-.8" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M10.14 2a2.8 2.8 0 0 1 2.8 2.8v1.82a2.8 2.8 0 0 1 3.11 1.1q.59-.31 1.3-.32a2.8 2.8 0 0 1 2.8 2.8v3.6a8.2 8.2 0 0 1-16.27 1.47l-1.05-2.68a2.8 2.8 0 0 1 4.51-3.22V4.8a2.8 2.8 0 0 1 2.8-2.8m0 2a.8.8 0 0 0-.8.8v8.1a1 1 0 0 1-1.86.5L6 10.9v-.01a.8.8 0 0 0-1.1-.3.8.8 0 0 0-.3 1.1l.07.13 1.1 2.8.03.1.03.1a6.2 6.2 0 0 0 12.31-1.02v-3.6a.8.8 0 0 0-1.6-.08v1.43a1 1 0 0 1-2 0V9.3a.8.8 0 0 0-1.6-.08v1.88a1 1 0 0 1-2 0V4.8a.8.8 0 0 0-.8-.8" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorPointerFillDuotone.displayName = 'CursorPointerFillDuotone';

// Triple export pattern (lucide-react style)
export { CursorPointerFillDuotone, CursorPointerFillDuotone as CursorPointerFillDuotoneIcon, CursorPointerFillDuotone as SiCursorPointerFillDuotone };
export default CursorPointerFillDuotone;
export type { CursorPointerFillDuotoneProps };
