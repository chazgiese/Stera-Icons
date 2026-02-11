import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock7FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock7FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock7FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-7-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 4a1 1 0 0 0-1 1v4.73l-1.87 3.23a1 1 0 0 0 1.74 1l2-3.46.03-.07.01-.03.03-.06.01-.03.01-.05.02-.05.02-.2V7a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path d="M12 6a1 1 0 0 1 1 1v5l-.02.2-.02.06-.01.05-.01.03-.03.06v.03l-.04.06v.01l-2 3.46a1 1 0 0 1-1.74-1L11 11.73V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock7FillDuotone.displayName = 'Clock7FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock7FillDuotone, Clock7FillDuotone as Clock7FillDuotoneIcon, Clock7FillDuotone as SiClock7FillDuotone };
export default Clock7FillDuotone;
export type { Clock7FillDuotoneProps };
