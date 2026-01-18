import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SidebarRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SidebarRightFillDuotone = memo(
  forwardRef<SVGSVGElement, SidebarRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M8.4 3q-1.65-.02-2.7.06c-.74.06-1.38.18-1.97.48a5 5 0 0 0-2.19 2.19c-.3.6-.42 1.23-.48 1.96Q.98 8.75 1 10.4v3.2q-.02 1.65.06 2.7c.06.74.18 1.38.48 1.97a5 5 0 0 0 2.19 2.19c.6.3 1.23.42 1.96.48q1.06.08 2.71.06H14V3z" opacity={.4} />
        <path fill="currentColor" d="M14 21h1.6q1.65.02 2.7-.06a5 5 0 0 0 1.97-.48 5 5 0 0 0 2.19-2.19c.3-.6.42-1.23.48-1.96q.08-1.06.06-2.71v-3.2q.02-1.65-.06-2.7a5 5 0 0 0-.48-1.97 5 5 0 0 0-2.19-2.19c-.6-.3-1.23-.42-1.96-.48Q17.25 2.99 15.6 3H14z" />
    </IconBase>
  ))
);

SidebarRightFillDuotone.displayName = 'SidebarRightFillDuotone';

// Triple export pattern (lucide-react style)
export { SidebarRightFillDuotone, SidebarRightFillDuotone as SidebarRightFillDuotoneIcon, SidebarRightFillDuotone as SiSidebarRightFillDuotone };
export type { SidebarRightFillDuotoneProps };
