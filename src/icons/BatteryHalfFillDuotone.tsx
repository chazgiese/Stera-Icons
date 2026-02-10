import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BatteryHalfFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BatteryHalfFillDuotone = memo(
  forwardRef<SVGSVGElement, BatteryHalfFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="battery-half-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.5 5.75q1.36-.01 2.25.05.89.04 1.6.37a4.3 4.3 0 0 1 1.98 1.99q.33.7.37 1.59h.8c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-.8q-.04.89-.37 1.6a4.3 4.3 0 0 1-1.99 1.98q-.7.33-1.6.37-.87.06-2.24.05h-7q-1.37.01-2.25-.05a4 4 0 0 1-1.6-.37 4.3 4.3 0 0 1-1.98-1.99q-.33-.7-.37-1.6-.06-.87-.05-2.24-.01-1.37.05-2.25.04-.89.37-1.6a4.3 4.3 0 0 1 1.99-1.98q.7-.33 1.6-.37.87-.06 2.24-.05zM6.6 8.5q-.4 0-.74.02-.35.01-.77.2a2 2 0 0 0-.87.87c-.14.27-.18.54-.2.77q-.03.34-.02.74v1.8q0 .4.02.74.01.36.2.77.3.57.87.87.42.19.77.2.34.02.74.02h2.8q.4 0 .74-.02.36-.01.77-.2a2 2 0 0 0 .87-.87q.19-.41.2-.77.02-.34.02-.74v-1.8q0-.4-.02-.74a2 2 0 0 0-.11-.57l-.09-.2-.07-.14a2 2 0 0 0-.8-.73 2 2 0 0 0-.77-.2Q9.8 8.5 9.4 8.5z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9.4 8.5q.4 0 .74.02.36.01.77.2a2 2 0 0 1 .8.73l.07.14.09.2q.1.3.11.57.02.34.02.74v1.8q0 .4-.02.74-.01.36-.2.77a2 2 0 0 1-.87.87q-.41.19-.77.2-.34.02-.74.02H6.6q-.4 0-.74-.02-.36-.01-.77-.2a2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.77q-.03-.34-.02-.74v-1.8q0-.4.02-.74.01-.36.2-.77a2 2 0 0 1 .87-.87c.27-.14.54-.18.77-.2q.34-.02.74-.02z" />
    </IconBase>
  ))
);

BatteryHalfFillDuotone.displayName = 'BatteryHalfFillDuotone';

// Triple export pattern (lucide-react style)
export { BatteryHalfFillDuotone, BatteryHalfFillDuotone as BatteryHalfFillDuotoneIcon, BatteryHalfFillDuotone as SiBatteryHalfFillDuotone };
export default BatteryHalfFillDuotone;
export type { BatteryHalfFillDuotoneProps };
