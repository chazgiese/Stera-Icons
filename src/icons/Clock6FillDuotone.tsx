import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock6FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock6FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock6FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-6-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 4a1 1 0 0 0-1 1v9a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path d="M12 6a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock6FillDuotone.displayName = 'Clock6FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock6FillDuotone, Clock6FillDuotone as Clock6FillDuotoneIcon, Clock6FillDuotone as SiClock6FillDuotone };
export default Clock6FillDuotone;
export type { Clock6FillDuotoneProps };
