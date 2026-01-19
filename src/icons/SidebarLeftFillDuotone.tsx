import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SidebarLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SidebarLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, SidebarLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sidebar-left-fill-duotone" {...props}>
      <path fill="currentColor" d="M15.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H10V3z" opacity={.4} />
        <path fill="currentColor" d="M10 21H8.4q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q.98 15.25 1 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q6.75 2.99 8.4 3H10z" />
    </IconBase>
  ))
);

SidebarLeftFillDuotone.displayName = 'SidebarLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { SidebarLeftFillDuotone, SidebarLeftFillDuotone as SidebarLeftFillDuotoneIcon, SidebarLeftFillDuotone as SiSidebarLeftFillDuotone };
export type { SidebarLeftFillDuotoneProps };
