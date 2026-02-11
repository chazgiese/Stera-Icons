import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock7BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock7BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock7BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-7-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M12 6a1 1 0 0 1 1 1v5l-.02.2-.02.06-.01.05-.01.03-.03.06v.03l-.04.06v.01l-2 3.46a1 1 0 0 1-1.74-1L11 11.73V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock7BoldDuotone.displayName = 'Clock7BoldDuotone';

// Triple export pattern (lucide-react style)
export { Clock7BoldDuotone, Clock7BoldDuotone as Clock7BoldDuotoneIcon, Clock7BoldDuotone as SiClock7BoldDuotone };
export default Clock7BoldDuotone;
export type { Clock7BoldDuotoneProps };
