import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivityCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ActivityCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ActivityCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M10.53 6.75c.3.01.58.22.68.51l2.37 7.1.83-2.03c.27-.65.91-1.08 1.62-1.08h1.47c.41 0 .75.34.75.75s-.34.75-.75.75h-1.47q-.17 0-.23.15l-1.6 3.89c-.13.29-.41.47-.73.46-.3-.01-.58-.22-.68-.51l-2.37-7.1-.83 2.03c-.27.65-.91 1.08-1.62 1.08H6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.47q.17 0 .23-.15L9.8 7.2l.06-.1c.14-.23.4-.37.67-.36" />
    </IconBase>
  ))
);

ActivityCircleRegularDuotone.displayName = 'ActivityCircleRegularDuotone';

// Triple export pattern
export { ActivityCircleRegularDuotone, ActivityCircleRegularDuotone as ActivityCircleRegularDuotoneIcon, ActivityCircleRegularDuotone as SiActivityCircleRegularDuotone };
export default ActivityCircleRegularDuotone;
export type { ActivityCircleRegularDuotoneProps };
