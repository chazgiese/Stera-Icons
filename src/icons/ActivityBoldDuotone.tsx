import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivityBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ActivityBoldDuotone = memo(
  forwardRef<SVGSVGElement, ActivityBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="activity-bold-duotone" {...props}>
      <path d="M21 11a1 1 0 1 1 0 2h-2.63q-.16 0-.24.16l-2.7 7.2a1 1 0 0 1-1.88-.06l-2.5-8 1.9-.6 1.64 5.22 1.67-4.46a2.25 2.25 0 0 1 2.1-1.46z" opacity={.4} />
        <path d="M9.53 3c.43.01.8.3.92.7l2.5 8-1.9.6L9.4 7.08l-1.67 4.46A2.25 2.25 0 0 1 5.64 13H3a1 1 0 1 1 0-2h2.63q.17 0 .24-.16l2.7-7.2.06-.13a1 1 0 0 1 .9-.51" />
    </IconBase>
  ))
);

ActivityBoldDuotone.displayName = 'ActivityBoldDuotone';

// Triple export pattern (lucide-react style)
export { ActivityBoldDuotone, ActivityBoldDuotone as ActivityBoldDuotoneIcon, ActivityBoldDuotone as SiActivityBoldDuotone };
export default ActivityBoldDuotone;
export type { ActivityBoldDuotoneProps };
