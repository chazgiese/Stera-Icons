import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClockRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClockRegularDuotone = memo(
  forwardRef<SVGSVGElement, ClockRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.25c.41 0 .75.34.75.75v4.69l2.6 2.6c.3.3.3.78 0 1.07-.28.3-.76.3-1.05 0l-2.83-2.83q-.09-.09-.13-.19-.02-.02-.03-.05l-.05-.16-.01-.13V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ClockRegularDuotone.displayName = 'ClockRegularDuotone';

// Triple export pattern
export { ClockRegularDuotone, ClockRegularDuotone as ClockRegularDuotoneIcon, ClockRegularDuotone as SiClockRegularDuotone };
export default ClockRegularDuotone;
export type { ClockRegularDuotoneProps };
