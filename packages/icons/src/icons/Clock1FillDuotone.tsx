import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock1FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock1FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock1FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 4.38c-.48 0-.87.39-.87.87v5.02l.01.14q.03.15.1.28l.03.04q0 0 .02.03l.03.04.01.02.04.04.03.03.03.02.03.03.04.02.04.04h.02l.01.01.23.1h.1l.03.01h.18l.05-.01.06-.01.08-.03h.01l.07-.03h.01l.05-.03.04-.03.02-.01.05-.04.03-.03.02-.01.04-.05.02-.02.04-.04.01-.03.04-.04v-.02l2-3.47c.25-.41.1-.95-.31-1.2-.42-.23-.96-.09-1.2.33l-.37.63V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v1.73l.36-.63c.24-.42.78-.56 1.2-.32s.56.78.32 1.2l-2 3.46-.01.02-.04.04-.01.03-.03.04-.03.02-.04.05-.02.01-.03.03-.05.04-.02.01-.04.03-.05.02h-.01l-.07.04h-.01l-.07.02h-.01l-.06.02h-.05l-.03.01h-.22l-.05-.02q-.14-.03-.24-.09l-.03-.01-.04-.04-.04-.02-.03-.03-.03-.02-.03-.03-.04-.04-.01-.02-.03-.04-.02-.03-.03-.04q-.07-.13-.1-.28l-.02-.14V7c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

Clock1FillDuotone.displayName = 'Clock1FillDuotone';

// Triple export pattern
export { Clock1FillDuotone, Clock1FillDuotone as Clock1FillDuotoneIcon, Clock1FillDuotone as SiClock1FillDuotone };
export default Clock1FillDuotone;
export type { Clock1FillDuotoneProps };
