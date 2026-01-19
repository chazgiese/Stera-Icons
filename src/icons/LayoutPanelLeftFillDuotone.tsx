import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayoutPanelLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutPanelLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, LayoutPanelLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-panel-left-fill-duotone" {...props}>
      <path d="M18.6 13q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96T22 16.4v2.2q0 .61-.02 1.07t-.25.96a2.5 2.5 0 0 1-1.1 1.1q-.49.22-.96.25T18.6 22h-2.2q-.61 0-1.07-.02a3 3 0 0 1-.96-.25 2.5 2.5 0 0 1-1.1-1.1 3 3 0 0 1-.25-.96Q13 19.2 13 18.6v-2.2q0-.61.02-1.07t.25-.96a2.5 2.5 0 0 1 1.1-1.1q.49-.22.96-.25T16.4 13zM18.6 2q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96T22 5.4v2.2q0 .61-.02 1.07t-.25.96a2.5 2.5 0 0 1-1.1 1.1q-.49.22-.96.25T18.6 11h-2.2q-.61 0-1.07-.02a3 3 0 0 1-.96-.25 2.5 2.5 0 0 1-1.1-1.1 3 3 0 0 1-.25-.96Q13 8.2 13 7.6V5.4q0-.61.02-1.07t.25-.96a2.5 2.5 0 0 1 1.1-1.1q.49-.22.96-.25T16.4 2z" opacity={0.4} />
        <path fill="currentColor" d="M7.6 2q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96T11 5.4v13.2q0 .61-.02 1.07t-.25.96a2.5 2.5 0 0 1-1.1 1.1q-.49.22-.96.25T7.6 22H5.4q-.61 0-1.07-.02a3 3 0 0 1-.96-.25 2.5 2.5 0 0 1-1.1-1.1 3 3 0 0 1-.25-.96Q2 19.2 2 18.6V5.4q0-.61.02-1.07t.25-.96a2.5 2.5 0 0 1 1.1-1.1q.49-.22.96-.25T5.4 2z" />
    </IconBase>
  ))
);

LayoutPanelLeftFillDuotone.displayName = 'LayoutPanelLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { LayoutPanelLeftFillDuotone, LayoutPanelLeftFillDuotone as LayoutPanelLeftFillDuotoneIcon, LayoutPanelLeftFillDuotone as SiLayoutPanelLeftFillDuotone };
export type { LayoutPanelLeftFillDuotoneProps };
