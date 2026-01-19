import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BatteryFullFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BatteryFullFillDuotone = memo(
  forwardRef<SVGSVGElement, BatteryFullFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="battery-full-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15 5.25q1.37-.01 2.24.04t1.58.32a4.8 4.8 0 0 1 2.57 2.57q.28.7.32 1.57h.79c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-.8a5 5 0 0 1-.31 1.57 4.8 4.8 0 0 1-2.57 2.57q-.7.28-1.58.32-.87.05-2.24.04H7q-1.37.01-2.24-.04-.88-.04-1.58-.32a4.8 4.8 0 0 1-2.57-2.57c-.2-.48-.28-.98-.32-1.58Q.24 13.37.25 12q-.01-1.37.04-2.24c.04-.6.13-1.1.32-1.58a4.8 4.8 0 0 1 2.57-2.57q.7-.28 1.58-.32.87-.05 2.24-.04zM5.6 8q-.4 0-.74.02-.35.01-.77.2a2 2 0 0 0-.87.87q-.19.41-.2.77-.03.34-.02.74v2.8q0 .4.02.74.01.36.2.77.3.57.87.87.42.19.77.2.34.02.74.02h10.8q.4 0 .74-.02.36-.01.77-.2a2 2 0 0 0 .87-.87q.19-.41.2-.77.02-.34.02-.74v-2.8q0-.4-.02-.74a2 2 0 0 0-.11-.57l-.09-.2-.07-.14a2 2 0 0 0-.8-.73 2 2 0 0 0-.77-.2Q16.8 8 16.4 8z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16.4 8q.4 0 .74.02.36.01.77.2a2 2 0 0 1 .8.73l.07.14.09.2q.1.3.11.57.02.34.02.74v2.8q0 .4-.02.74-.01.36-.2.77a2 2 0 0 1-.87.87q-.41.19-.77.2-.34.02-.74.02H5.6q-.4 0-.74-.02-.36-.01-.77-.2a2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.77Q3 13.8 3 13.4v-2.8q0-.4.02-.74c.02-.23.06-.5.2-.77a2 2 0 0 1 .87-.87q.42-.19.77-.2Q5.2 8 5.6 8z" />
    </IconBase>
  ))
);

BatteryFullFillDuotone.displayName = 'BatteryFullFillDuotone';

// Triple export pattern (lucide-react style)
export { BatteryFullFillDuotone, BatteryFullFillDuotone as BatteryFullFillDuotoneIcon, BatteryFullFillDuotone as SiBatteryFullFillDuotone };
export default BatteryFullFillDuotone;
export type { BatteryFullFillDuotoneProps };
