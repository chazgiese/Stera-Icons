import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorTextBoldDuotone = memo(
  forwardRef<SVGSVGElement, CursorTextBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-text-bold-duotone" {...props}>
      <path d="M13 17.5c0 1.1.9 2 2 2h1a1 1 0 1 1 0 2h-1c-1.2 0-2.27-.53-3-1.36.62-.7 1-1.63 1-2.64M9 2.5c1.2 0 2.27.52 3 1.36-.62.7-1 1.63-1 2.64a2 2 0 0 0-2-2H8a1 1 0 0 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M16 2.5a1 1 0 1 1 0 2h-1a2 2 0 0 0-2 2v11a4 4 0 0 1-4 4H8a1 1 0 1 1 0-2h1a2 2 0 0 0 2-2v-11a4 4 0 0 1 4-4z" />
    </IconBase>
  ))
);

CursorTextBoldDuotone.displayName = 'CursorTextBoldDuotone';

// Triple export pattern (lucide-react style)
export { CursorTextBoldDuotone, CursorTextBoldDuotone as CursorTextBoldDuotoneIcon, CursorTextBoldDuotone as SiCursorTextBoldDuotone };
export default CursorTextBoldDuotone;
export type { CursorTextBoldDuotoneProps };
