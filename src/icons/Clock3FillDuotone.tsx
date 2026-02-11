import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock3FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock3FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock3FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-3-fill-duotone" {...props}>
      <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-3V7a1 1 0 0 0-1-1" opacity={.4} />
        <path d="M12 6a1 1 0 0 1 1 1v4h3a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock3FillDuotone.displayName = 'Clock3FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock3FillDuotone, Clock3FillDuotone as Clock3FillDuotoneIcon, Clock3FillDuotone as SiClock3FillDuotone };
export default Clock3FillDuotone;
export type { Clock3FillDuotoneProps };
