import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock3BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock3BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock3BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-3-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M12 6a1 1 0 0 1 1 1v4h3a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock3BoldDuotone.displayName = 'Clock3BoldDuotone';

// Triple export pattern (lucide-react style)
export { Clock3BoldDuotone, Clock3BoldDuotone as Clock3BoldDuotoneIcon, Clock3BoldDuotone as SiClock3BoldDuotone };
export default Clock3BoldDuotone;
export type { Clock3BoldDuotoneProps };
