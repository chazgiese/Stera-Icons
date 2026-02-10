import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock6RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock6RegularDuotone = memo(
  forwardRef<SVGSVGElement, Clock6RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-6-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 6.25c.41 0 .75.34.75.75v9a.75.75 0 0 1-1.5 0V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

Clock6RegularDuotone.displayName = 'Clock6RegularDuotone';

// Triple export pattern (lucide-react style)
export { Clock6RegularDuotone, Clock6RegularDuotone as Clock6RegularDuotoneIcon, Clock6RegularDuotone as SiClock6RegularDuotone };
export default Clock6RegularDuotone;
export type { Clock6RegularDuotoneProps };
