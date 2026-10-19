import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock4FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock4FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock4FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 4.38c-.48 0-.87.39-.87.87v5.02l.01.14q.03.15.1.28l.03.04.01.02.09.1.03.04.03.02.03.03.04.02.04.04h.02l3.47 2c.41.25.95.1 1.2-.31.23-.42.09-.96-.33-1.2l-3.03-1.75V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v4.5l3.02 1.74c.42.24.56.78.32 1.2s-.78.56-1.2.32l-3.46-2-.02-.01-.04-.04-.04-.02-.03-.03-.03-.02-.03-.03-.09-.11-.01-.02-.03-.04q-.07-.13-.1-.28l-.02-.14V7c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

Clock4FillDuotone.displayName = 'Clock4FillDuotone';

// Triple export pattern
export { Clock4FillDuotone, Clock4FillDuotone as Clock4FillDuotoneIcon, Clock4FillDuotone as SiClock4FillDuotone };
export default Clock4FillDuotone;
export type { Clock4FillDuotoneProps };
