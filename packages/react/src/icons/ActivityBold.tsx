import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ActivityBoldProps = Omit<IconBaseProps, 'children'>;

const ActivityBold = memo(
  forwardRef<SVGSVGElement, ActivityBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9 2a1 1 0 0 1 .95.68L15 17.84l1.77-5.3A2.25 2.25 0 0 1 18.9 11H22a1 1 0 1 1 0 2h-3.1q-.17.01-.24.17l-2.71 8.15a1 1 0 0 1-1.9 0L9 6.16l-1.77 5.3A2.25 2.25 0 0 1 5.1 13H2a1 1 0 1 1 0-2h3.1q.17-.01.24-.17l2.71-8.15.06-.14A1 1 0 0 1 9 2" />
    </IconBase>
  ))
);

ActivityBold.displayName = 'ActivityBold';

// Triple export pattern (lucide-react style)
export { ActivityBold, ActivityBold as ActivityBoldIcon, ActivityBold as SiActivityBold };
export type { ActivityBoldProps };
