import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock8FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock8FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock8FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-8-fill-duotone" {...props}>
      <path fill="currentColor" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 4a1 1 0 0 0-1 1v4.42l-2.96 1.71a1 1 0 0 0 1 1.74l3.46-2 .01-.01.07-.05h.01a1 1 0 0 0 .2-.2l.02-.02.12-.23.01-.02A1 1 0 0 0 13 12V7a1 1 0 0 0-1-1" opacity={.4} />
        <path fill="currentColor" d="M12 6a1 1 0 0 1 1 1v5a1 1 0 0 1-.06.34v.02a1 1 0 0 1-.35.44l-.01.01-.07.05h-.01l-3.47 2a1 1 0 0 1-1-1.73l2.97-1.7V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock8FillDuotone.displayName = 'Clock8FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock8FillDuotone, Clock8FillDuotone as Clock8FillDuotoneIcon, Clock8FillDuotone as SiClock8FillDuotone };
export default Clock8FillDuotone;
export type { Clock8FillDuotoneProps };
