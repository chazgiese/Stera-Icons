import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock9BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock9BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock9BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-9-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M12 6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h3V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock9BoldDuotone.displayName = 'Clock9BoldDuotone';

// Triple export pattern (lucide-react style)
export { Clock9BoldDuotone, Clock9BoldDuotone as Clock9BoldDuotoneIcon, Clock9BoldDuotone as SiClock9BoldDuotone };
export default Clock9BoldDuotone;
export type { Clock9BoldDuotoneProps };
