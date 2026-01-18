import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BatteryLowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BatteryLowFillDuotone = memo(
  forwardRef<SVGSVGElement, BatteryLowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15 5.25q1.37-.01 2.24.04t1.58.32a4.8 4.8 0 0 1 2.57 2.57q.28.7.32 1.57h.79c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-.8a5 5 0 0 1-.31 1.57 4.8 4.8 0 0 1-2.57 2.57q-.7.28-1.58.32-.87.05-2.24.04H7q-1.37.01-2.24-.04-.88-.04-1.58-.32a4.8 4.8 0 0 1-2.57-2.57c-.2-.48-.28-.98-.32-1.58Q.24 13.37.25 12q-.01-1.37.04-2.24c.04-.6.13-1.1.32-1.58a4.8 4.8 0 0 1 2.57-2.57q.7-.28 1.58-.32.87-.05 2.24-.04zM5 8a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0v-4a2 2 0 0 0-2-2" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M5 8a2 2 0 0 1 2 2v4a2 2 0 0 1-3.99.2L3 14v-4c0-1.1.9-2 2-2" />
    </IconBase>
  ))
);

BatteryLowFillDuotone.displayName = 'BatteryLowFillDuotone';

export { BatteryLowFillDuotone };
export type { BatteryLowFillDuotoneProps };
