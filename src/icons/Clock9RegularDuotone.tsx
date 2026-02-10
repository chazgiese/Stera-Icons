import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock9RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock9RegularDuotone = memo(
  forwardRef<SVGSVGElement, Clock9RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-9-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 6.25c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75H8a.75.75 0 0 1 0-1.5h3.25V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

Clock9RegularDuotone.displayName = 'Clock9RegularDuotone';

// Triple export pattern (lucide-react style)
export { Clock9RegularDuotone, Clock9RegularDuotone as Clock9RegularDuotoneIcon, Clock9RegularDuotone as SiClock9RegularDuotone };
export default Clock9RegularDuotone;
export type { Clock9RegularDuotoneProps };
