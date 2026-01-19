import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock7RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock7RegularDuotone = memo(
  forwardRef<SVGSVGElement, Clock7RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-7-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5.25c.41 0 .75.34.75.75v6.1l-.03.1-.02.08-.05.1-2 3.46a.75.75 0 1 1-1.3-.75l1.9-3.3V6c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

Clock7RegularDuotone.displayName = 'Clock7RegularDuotone';

// Triple export pattern (lucide-react style)
export { Clock7RegularDuotone, Clock7RegularDuotone as Clock7RegularDuotoneIcon, Clock7RegularDuotone as SiClock7RegularDuotone };
export default Clock7RegularDuotone;
export type { Clock7RegularDuotoneProps };
