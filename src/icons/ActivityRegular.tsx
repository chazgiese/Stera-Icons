import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivityRegularProps = Omit<IconBaseProps, 'children'>;

const ActivityRegular = memo(
  forwardRef<SVGSVGElement, ActivityRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="activity" {...props}>
      <path fill="currentColor" d="M9.52 3.25c.32 0 .6.22.7.53l4.34 13.91 1.93-5.14a2 2 0 0 1 1.88-1.3H21a.75.75 0 0 1 0 1.5h-2.63a.5.5 0 0 0-.47.32l-2.7 7.2a.75.75 0 0 1-1.42-.05L9.44 6.31 7.5 11.45a2 2 0 0 1-1.88 1.3H3a.75.75 0 0 1 0-1.5h2.63c.21 0 .4-.13.47-.32l2.7-7.2.05-.1c.13-.24.4-.39.67-.38" />
    </IconBase>
  ))
);

ActivityRegular.displayName = 'ActivityRegular';

// Triple export pattern (lucide-react style)
export { ActivityRegular, ActivityRegular as ActivityRegularIcon, ActivityRegular as SiActivityRegular };
export default ActivityRegular;
export type { ActivityRegularProps };
