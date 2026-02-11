import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivityFillProps = Omit<IconBaseProps, 'children'>;

const ActivityFill = memo(
  forwardRef<SVGSVGElement, ActivityFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="activity-fill" {...props}>
      <path d="M9.54 2.5c.64.02 1.2.44 1.4 1.05l3.69 11.83 1.16-3.1a2.75 2.75 0 0 1 2.58-1.78H21a1.5 1.5 0 0 1 0 3h-2.46l-2.64 7.03a1.5 1.5 0 0 1-2.83-.08L9.37 8.62l-1.16 3.1a2.75 2.75 0 0 1-2.58 1.78H3a1.5 1.5 0 0 1 0-3h2.46L8.1 3.47l.04-.1c.25-.54.8-.89 1.4-.87" />
    </IconBase>
  ))
);

ActivityFill.displayName = 'ActivityFill';

// Triple export pattern (lucide-react style)
export { ActivityFill, ActivityFill as ActivityFillIcon, ActivityFill as SiActivityFill };
export default ActivityFill;
export type { ActivityFillProps };
