import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivityFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ActivityFillDuotone = memo(
  forwardRef<SVGSVGElement, ActivityFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="activity-fill-duotone" {...props}>
      <path fill="currentColor" d="M21 10.5a1.5 1.5 0 0 1 0 3h-2.46l-2.64 7.03a1.5 1.5 0 0 1-2.83-.08l-2.5-8 2.86-.9 1.2 3.83 1.16-3.1a2.75 2.75 0 0 1 2.58-1.78z" opacity={.4} />
        <path fill="currentColor" d="M9.54 2.5c.64.02 1.2.44 1.4 1.05l2.5 8-2.87.9-1.2-3.83-1.16 3.1a2.75 2.75 0 0 1-2.58 1.78H3a1.5 1.5 0 0 1 0-3h2.46L8.1 3.47l.04-.1c.25-.54.8-.89 1.4-.87" />
    </IconBase>
  ))
);

ActivityFillDuotone.displayName = 'ActivityFillDuotone';

// Triple export pattern (lucide-react style)
export { ActivityFillDuotone, ActivityFillDuotone as ActivityFillDuotoneIcon, ActivityFillDuotone as SiActivityFillDuotone };
export default ActivityFillDuotone;
export type { ActivityFillDuotoneProps };
