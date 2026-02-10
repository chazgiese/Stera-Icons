import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorOgBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorOgBoldDuotone = memo(
  forwardRef<SVGSVGElement, CursorOgBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-og-bold-duotone" {...props}>
      <path fill="currentColor" d="M13.24 14.71a1 1 0 0 0 1.03.56l1.33-.18 1.77 3.94a1 1 0 0 1-.5 1.32l-3.42 1.56a1 1 0 0 1-1.33-.5l-1.77-3.94 1.02-.88a1 1 0 0 0 .26-1.15l1.9 4.23 1.6-.73z" opacity={.4} />
        <path fill="currentColor" d="M6.59 2.09a1 1 0 0 1 1.07.16l12 10.62a1 1 0 0 1-.53 1.74l-4.86.66a1 1 0 1 1-.27-1.98l2.7-.37L8 5.22v11.65l2.05-1.79a1 1 0 0 1 1.32 1.5l-3.7 3.24A1 1 0 0 1 6 19.07V3a1 1 0 0 1 .59-.91" />
    </IconBase>
  ))
);

CursorOgBoldDuotone.displayName = 'CursorOgBoldDuotone';

// Triple export pattern (lucide-react style)
export { CursorOgBoldDuotone, CursorOgBoldDuotone as CursorOgBoldDuotoneIcon, CursorOgBoldDuotone as SiCursorOgBoldDuotone };
export default CursorOgBoldDuotone;
export type { CursorOgBoldDuotoneProps };
