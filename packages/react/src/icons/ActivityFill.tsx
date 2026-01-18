import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ActivityFillProps = Omit<IconBaseProps, 'children'>;

const ActivityFill = memo(
  forwardRef<SVGSVGElement, ActivityFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9 1.5c.65 0 1.22.41 1.42 1.03L15 16.26l1.3-3.88a2.75 2.75 0 0 1 2.6-1.88H22a1.5 1.5 0 0 1 0 3h-2.92l-2.66 7.97a1.5 1.5 0 0 1-2.84 0L9 7.74l-1.3 3.88a2.75 2.75 0 0 1-2.6 1.88H2a1.5 1.5 0 0 1 0-3h2.92l2.66-7.97.04-.12A1.5 1.5 0 0 1 9 1.5" />
    </IconBase>
  ))
);

ActivityFill.displayName = 'ActivityFill';

// Triple export pattern (lucide-react style)
export { ActivityFill, ActivityFill as ActivityFillIcon, ActivityFill as SiActivityFill };
export type { ActivityFillProps };
