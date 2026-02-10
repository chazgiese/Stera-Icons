import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorBoldDuotone = memo(
  forwardRef<SVGSVGElement, CursorBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-bold-duotone" {...props}>
      <path fill="currentColor" d="m9.1 4.26 10.52 3.5a2.02 2.02 0 0 1-.07 3.85l-6.14 1.8-1.8 6.14a2.02 2.02 0 0 1-3.85.07L4.26 9.11a1 1 0 0 0 1.9-.62L9.66 19l.01.01h.01v-.01l1.97-6.66.04-.12a1 1 0 0 1 .64-.56l6.66-1.96.01-.02-.01-.01-10.5-3.5a1 1 0 0 0 .62-1.9" opacity={.4} />
        <path fill="currentColor" d="M3.1 5.66A2.02 2.02 0 0 1 5.67 3.1L9.1 4.26a1 1 0 0 1-.63 1.9L5.02 5H5v.02l1.14 3.46a1 1 0 0 1-1.9.63z" />
    </IconBase>
  ))
);

CursorBoldDuotone.displayName = 'CursorBoldDuotone';

// Triple export pattern (lucide-react style)
export { CursorBoldDuotone, CursorBoldDuotone as CursorBoldDuotoneIcon, CursorBoldDuotone as SiCursorBoldDuotone };
export default CursorBoldDuotone;
export type { CursorBoldDuotoneProps };
