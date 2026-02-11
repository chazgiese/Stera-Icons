import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivityRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ActivityRegularDuotone = memo(
  forwardRef<SVGSVGElement, ActivityRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="activity-duotone" {...props}>
      <path d="M21 11.25a.75.75 0 0 1 0 1.5h-2.63a.5.5 0 0 0-.47.32l-2.7 7.2a.75.75 0 0 1-1.42-.05l-2.5-8 1.44-.44 1.84 5.91 1.93-5.14a2 2 0 0 1 1.88-1.3z" opacity={.4} />
        <path d="M9.52 3.25c.32 0 .6.22.7.53l2.5 8-1.44.44-1.84-5.91-1.93 5.14a2 2 0 0 1-1.88 1.3H3a.75.75 0 0 1 0-1.5h2.63c.21 0 .4-.13.47-.32l2.7-7.2.05-.1c.13-.24.4-.39.67-.38" />
    </IconBase>
  ))
);

ActivityRegularDuotone.displayName = 'ActivityRegularDuotone';

// Triple export pattern (lucide-react style)
export { ActivityRegularDuotone, ActivityRegularDuotone as ActivityRegularDuotoneIcon, ActivityRegularDuotone as SiActivityRegularDuotone };
export default ActivityRegularDuotone;
export type { ActivityRegularDuotoneProps };
