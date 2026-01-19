import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ActivityRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ActivityRegularDuotone = memo(
  forwardRef<SVGSVGElement, ActivityRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="activity-duotone" {...props}>
      <path fill="currentColor" d="M22 11.25a.75.75 0 0 1 0 1.5h-3.1a.5.5 0 0 0-.47.34l-2.72 8.15a.75.75 0 0 1-1.42 0l-3-9 1.42-.48L15 18.63l2-6.01a2 2 0 0 1 1.9-1.37z" opacity={.4} />
        <path fill="currentColor" d="M9 2.25c.32 0 .61.2.71.51l3 9-1.42.48-2.3-6.87-2 6.01a2 2 0 0 1-1.9 1.37H2a.75.75 0 0 1 0-1.5h3.1a.5.5 0 0 0 .47-.34L8.3 2.76l.04-.1c.13-.25.39-.41.67-.41" />
    </IconBase>
  ))
);

ActivityRegularDuotone.displayName = 'ActivityRegularDuotone';

// Triple export pattern (lucide-react style)
export { ActivityRegularDuotone, ActivityRegularDuotone as ActivityRegularDuotoneIcon, ActivityRegularDuotone as SiActivityRegularDuotone };
export default ActivityRegularDuotone;
export type { ActivityRegularDuotoneProps };
