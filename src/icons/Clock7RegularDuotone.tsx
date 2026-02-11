import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock7RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock7RegularDuotone = memo(
  forwardRef<SVGSVGElement, Clock7RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-7-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.25c.41 0 .75.34.75.75v5.1l-.03.1-.02.08-.05.1-2 3.46a.75.75 0 1 1-1.3-.75l1.9-3.3V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

Clock7RegularDuotone.displayName = 'Clock7RegularDuotone';

// Triple export pattern (lucide-react style)
export { Clock7RegularDuotone, Clock7RegularDuotone as Clock7RegularDuotoneIcon, Clock7RegularDuotone as SiClock7RegularDuotone };
export default Clock7RegularDuotone;
export type { Clock7RegularDuotoneProps };
