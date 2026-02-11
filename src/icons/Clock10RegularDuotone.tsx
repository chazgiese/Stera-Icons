import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock10RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock10RegularDuotone = memo(
  forwardRef<SVGSVGElement, Clock10RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-10-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.25c.41 0 .75.34.75.75v5q0 .1-.03.2l-.02.07-.02.03-.03.07-.02.03-.15.17-.04.04-.08.04-.05.03-.14.05-.11.02h-.17l-.08-.03-.1-.03-.09-.04-3.46-2a.75.75 0 1 1 .75-1.3l2.34 1.35V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

Clock10RegularDuotone.displayName = 'Clock10RegularDuotone';

// Triple export pattern (lucide-react style)
export { Clock10RegularDuotone, Clock10RegularDuotone as Clock10RegularDuotoneIcon, Clock10RegularDuotone as SiClock10RegularDuotone };
export default Clock10RegularDuotone;
export type { Clock10RegularDuotoneProps };
