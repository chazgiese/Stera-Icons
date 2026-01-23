import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivityRegularProps = Omit<IconBaseProps, 'children'>;

const ActivityRegular = memo(
  forwardRef<SVGSVGElement, ActivityRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="activity" {...props}>
      <path fill="currentColor" d="M9 2.25c.32 0 .61.2.71.51L15 18.63l2-6.01a2 2 0 0 1 1.9-1.37H22a.75.75 0 0 1 0 1.5h-3.1a.5.5 0 0 0-.47.34l-2.72 8.15a.75.75 0 0 1-1.42 0L8.99 5.37l-2 6.01a2 2 0 0 1-1.9 1.37H2a.75.75 0 0 1 0-1.5h3.1a.5.5 0 0 0 .47-.34L8.3 2.76l.04-.1c.13-.25.39-.41.67-.41" />
    </IconBase>
  ))
);

ActivityRegular.displayName = 'ActivityRegular';

// Triple export pattern (lucide-react style)
export { ActivityRegular, ActivityRegular as ActivityRegularIcon, ActivityRegular as SiActivityRegular };
export default ActivityRegular;
export type { ActivityRegularProps };
