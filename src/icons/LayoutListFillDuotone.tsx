import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutListFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutListFillDuotone = memo(
  forwardRef<SVGSVGElement, LayoutListFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-list-fill-duotone" {...props}>
      <path d="M7.6 13q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96T11 16.4v2.2q0 .61-.02 1.07t-.25.96a2.5 2.5 0 0 1-1.1 1.1q-.49.22-.96.25T7.6 22H5.4q-.61 0-1.07-.02a3 3 0 0 1-.96-.25 2.5 2.5 0 0 1-1.1-1.1 3 3 0 0 1-.25-.96Q2 19.2 2 18.6v-2.2q0-.61.02-1.07t.25-.96a2.5 2.5 0 0 1 1.1-1.1q.49-.22.96-.25T5.4 13zM7.6 2q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96T11 5.4v2.2q0 .61-.02 1.07t-.25.96a2.5 2.5 0 0 1-1.1 1.1q-.49.22-.96.25T7.6 11H5.4q-.61 0-1.07-.02a3 3 0 0 1-.96-.25 2.5 2.5 0 0 1-1.1-1.1 3 3 0 0 1-.25-.96Q2 8.2 2 7.6V5.4q0-.61.02-1.07t.25-.96a2.5 2.5 0 0 1 1.1-1.1q.49-.22.96-.25T5.4 2z" opacity={0.4} />
        <path fill="currentColor" d="M21 19a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zM21 14a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zM21 8a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zM21 3a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

LayoutListFillDuotone.displayName = 'LayoutListFillDuotone';

// Triple export pattern (lucide-react style)
export { LayoutListFillDuotone, LayoutListFillDuotone as LayoutListFillDuotoneIcon, LayoutListFillDuotone as SiLayoutListFillDuotone };
export default LayoutListFillDuotone;
export type { LayoutListFillDuotoneProps };
