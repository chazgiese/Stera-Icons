import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SidebarRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SidebarRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, SidebarRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sidebar-right-bold-duotone" {...props}>
      <path fill="currentColor" d="M8.4 3q-1.65-.02-2.7.06c-.74.06-1.38.18-1.97.48a5 5 0 0 0-2.19 2.19c-.3.6-.42 1.23-.48 1.96Q.98 8.75 1 10.4v3.2q-.02 1.65.06 2.7c.06.74.18 1.38.48 1.97a5 5 0 0 0 2.19 2.19c.6.3 1.23.42 1.96.48q1.06.08 2.71.06H14v-2H8.4c-1.14 0-1.93 0-2.55-.05a3 3 0 0 1-1.21-.28 3 3 0 0 1-1.31-1.3 3 3 0 0 1-.28-1.22C3 15.53 3 14.74 3 13.6v-3.2c0-1.14 0-1.93.05-2.55.05-.6.14-.95.28-1.21a3 3 0 0 1 1.3-1.31 3 3 0 0 1 1.22-.28C6.47 5 7.26 5 8.4 5H14V3z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M14 21h1.6q1.65.02 2.7-.06a5 5 0 0 0 1.97-.48 5 5 0 0 0 2.19-2.19c.3-.6.42-1.23.48-1.96q.08-1.06.06-2.71v-3.2q.02-1.65-.06-2.7a5 5 0 0 0-.48-1.97 5 5 0 0 0-2.19-2.19c-.6-.3-1.23-.42-1.96-.48Q17.25 2.99 15.6 3H14zm2-16c.93 0 1.6 0 2.15.05.6.05.95.14 1.21.28a3 3 0 0 1 1.31 1.3c.14.27.23.62.28 1.22.05.62.05 1.41.05 2.55v3.2c0 1.14 0 1.93-.05 2.55-.05.6-.14.95-.28 1.21a3 3 0 0 1-1.3 1.31 3 3 0 0 1-1.22.28c-.55.04-1.22.05-2.15.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

SidebarRightBoldDuotone.displayName = 'SidebarRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { SidebarRightBoldDuotone, SidebarRightBoldDuotone as SidebarRightBoldDuotoneIcon, SidebarRightBoldDuotone as SiSidebarRightBoldDuotone };
export type { SidebarRightBoldDuotoneProps };
