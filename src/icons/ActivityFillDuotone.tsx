import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ActivityFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ActivityFillDuotone = memo(
  forwardRef<SVGSVGElement, ActivityFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="activity-fill-duotone" {...props}>
      <path fill="currentColor" d="M22 10.5a1.5 1.5 0 0 1 0 3h-2.92l-2.66 7.97a1.5 1.5 0 0 1-2.84 0l-3-9 2.84-.94L15 16.26l1.3-3.88.07-.2c.43-1.01 1.42-1.68 2.53-1.68z" opacity={.4} />
        <path fill="currentColor" d="M9 1.5c.65 0 1.22.41 1.42 1.03l3 9-2.84.94L9 7.74l-1.3 3.88a2.75 2.75 0 0 1-2.6 1.88H2a1.5 1.5 0 0 1 0-3h2.92l2.66-7.97.04-.12A1.5 1.5 0 0 1 9 1.5" />
    </IconBase>
  ))
);

ActivityFillDuotone.displayName = 'ActivityFillDuotone';

// Triple export pattern (lucide-react style)
export { ActivityFillDuotone, ActivityFillDuotone as ActivityFillDuotoneIcon, ActivityFillDuotone as SiActivityFillDuotone };
export type { ActivityFillDuotoneProps };
