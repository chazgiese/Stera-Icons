import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SidebarLeftFillProps = Omit<IconBaseProps, 'children'>;

const SidebarLeftFill = memo(
  forwardRef<SVGSVGElement, SidebarLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sidebar-left-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H8.4q-1.24 0-2.14-.02l-.57-.04a5 5 0 0 1-1.96-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q.98 15.25 1 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q6.75 2.99 8.4 3zM10 19h5.6c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55v-3.2c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C17.53 5 16.74 5 15.6 5H10z" clipRule="evenodd" />
    </IconBase>
  ))
);

SidebarLeftFill.displayName = 'SidebarLeftFill';

// Triple export pattern (lucide-react style)
export { SidebarLeftFill, SidebarLeftFill as SidebarLeftFillIcon, SidebarLeftFill as SiSidebarLeftFill };
export type { SidebarLeftFillProps };
