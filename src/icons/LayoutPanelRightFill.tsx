import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutPanelRightFillProps = Omit<IconBaseProps, 'children'>;

const LayoutPanelRightFill = memo(
  forwardRef<SVGSVGElement, LayoutPanelRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-panel-right-fill" {...props}>
      <path d="M16.4 2q-.61 0-1.07.02t-.96.25a2.5 2.5 0 0 0-1.1 1.1q-.22.49-.25.96T13 5.4v13.2q0 .61.02 1.07t.25.96q.37.73 1.1 1.1.49.22.96.25t1.07.02h2.2q.61 0 1.07-.02t.96-.25a2.5 2.5 0 0 0 1.1-1.1q.22-.49.25-.96T22 18.6V5.4q0-.61-.02-1.07a3 3 0 0 0-.25-.96 2.5 2.5 0 0 0-1.1-1.1 3 3 0 0 0-.96-.25Q19.2 2 18.6 2zM5.4 13q-.61 0-1.07.02t-.96.25a2.5 2.5 0 0 0-1.1 1.1q-.22.49-.25.96T2 16.4v2.2q0 .61.02 1.07t.25.96q.37.73 1.1 1.1.49.22.96.25T5.4 22h2.2q.61 0 1.07-.02t.96-.25a2.5 2.5 0 0 0 1.1-1.1q.22-.49.25-.96T11 18.6v-2.2q0-.61-.02-1.07a3 3 0 0 0-.25-.96 2.5 2.5 0 0 0-1.1-1.1 3 3 0 0 0-.96-.25Q8.2 13 7.6 13zM5.4 2q-.61 0-1.07.02t-.96.25a2.5 2.5 0 0 0-1.1 1.1q-.22.49-.25.96T2 5.4v2.2q0 .61.02 1.07t.25.96q.37.73 1.1 1.1.49.22.96.25T5.4 11h2.2q.61 0 1.07-.02t.96-.25a2.5 2.5 0 0 0 1.1-1.1q.22-.49.25-.96T11 7.6V5.4q0-.61-.02-1.07a3 3 0 0 0-.25-.96 2.5 2.5 0 0 0-1.1-1.1 3 3 0 0 0-.96-.25Q8.2 2 7.6 2z" />
    </IconBase>
  ))
);

LayoutPanelRightFill.displayName = 'LayoutPanelRightFill';

// Triple export pattern (lucide-react style)
export { LayoutPanelRightFill, LayoutPanelRightFill as LayoutPanelRightFillIcon, LayoutPanelRightFill as SiLayoutPanelRightFill };
export default LayoutPanelRightFill;
export type { LayoutPanelRightFillProps };
