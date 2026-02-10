import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivityBoldProps = Omit<IconBaseProps, 'children'>;

const ActivityBold = memo(
  forwardRef<SVGSVGElement, ActivityBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="activity-bold" {...props}>
      <path fill="currentColor" d="M9.53 3c.43.01.8.3.92.7l4.14 13.22 1.67-4.46a2.25 2.25 0 0 1 2.1-1.46H21a1 1 0 1 1 0 2h-2.63q-.16 0-.24.16l-2.7 7.2a1 1 0 0 1-1.88-.06L9.4 7.08l-1.67 4.46A2.25 2.25 0 0 1 5.64 13H3a1 1 0 1 1 0-2h2.63q.17 0 .24-.16l2.7-7.2.06-.13a1 1 0 0 1 .9-.51" />
    </IconBase>
  ))
);

ActivityBold.displayName = 'ActivityBold';

// Triple export pattern (lucide-react style)
export { ActivityBold, ActivityBold as ActivityBoldIcon, ActivityBold as SiActivityBold };
export default ActivityBold;
export type { ActivityBoldProps };
