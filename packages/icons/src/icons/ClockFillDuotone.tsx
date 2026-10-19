import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClockFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClockFillDuotone = memo(
  forwardRef<SVGSVGElement, ClockFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 4.38c-.48 0-.87.39-.87.87v5l.01.17.04.13.01.04.01.02q.07.15.18.26l2.83 2.83c.34.34.9.34 1.24 0s.34-.9 0-1.24l-2.57-2.57V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v4.64l2.57 2.57c.34.34.34.9 0 1.24s-.9.34-1.24 0l-2.83-2.83q-.11-.11-.18-.26v-.02l-.02-.04-.04-.12v-.01l-.02-.17V7c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

ClockFillDuotone.displayName = 'ClockFillDuotone';

// Triple export pattern
export { ClockFillDuotone, ClockFillDuotone as ClockFillDuotoneIcon, ClockFillDuotone as SiClockFillDuotone };
export default ClockFillDuotone;
export type { ClockFillDuotoneProps };
