import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayoutListFillProps = Omit<IconBaseProps, 'children'>;

const LayoutListFill = memo(
  forwardRef<SVGSVGElement, LayoutListFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-list-fill" {...props}>
      <path fill="currentColor" d="M7.6 13q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96T11 16.4v2.2q0 .61-.02 1.07t-.25.96a2.5 2.5 0 0 1-1.1 1.1q-.49.22-.96.25T7.6 22H5.4q-.61 0-1.07-.02a3 3 0 0 1-.96-.25 2.5 2.5 0 0 1-1.1-1.1 3 3 0 0 1-.25-.96Q2 19.2 2 18.6v-2.2q0-.61.02-1.07t.25-.96a2.5 2.5 0 0 1 1.1-1.1q.49-.22.96-.25T5.4 13zM21 19a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zM21 14a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zM7.6 2q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96T11 5.4v2.2q0 .61-.02 1.07t-.25.96a2.5 2.5 0 0 1-1.1 1.1q-.49.22-.96.25T7.6 11H5.4q-.61 0-1.07-.02a3 3 0 0 1-.96-.25 2.5 2.5 0 0 1-1.1-1.1 3 3 0 0 1-.25-.96Q2 8.2 2 7.6V5.4q0-.61.02-1.07t.25-.96a2.5 2.5 0 0 1 1.1-1.1q.49-.22.96-.25T5.4 2zM21 8a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zM21 3a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

LayoutListFill.displayName = 'LayoutListFill';

// Triple export pattern (lucide-react style)
export { LayoutListFill, LayoutListFill as LayoutListFillIcon, LayoutListFill as SiLayoutListFill };
export default LayoutListFill;
export type { LayoutListFillProps };
