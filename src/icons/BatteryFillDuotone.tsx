import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BatteryFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BatteryFillDuotone = memo(
  forwardRef<SVGSVGElement, BatteryFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="battery-fill-duotone" {...props}>
      <path fill="currentColor" d="M15 5.25q1.37-.01 2.24.04t1.58.32a4.8 4.8 0 0 1 2.57 2.57c.2.48.28.98.32 1.58q.05.87.04 2.24.01 1.37-.04 2.24-.04.88-.32 1.58a4.8 4.8 0 0 1-2.57 2.57q-.7.28-1.58.32-.87.05-2.24.04H7q-1.37.01-2.24-.04-.88-.04-1.58-.32a4.8 4.8 0 0 1-2.57-2.57c-.2-.48-.28-.98-.32-1.58Q.24 13.37.25 12q-.01-1.37.04-2.24c.04-.6.13-1.1.32-1.58a4.8 4.8 0 0 1 2.57-2.57q.7-.28 1.58-.32.87-.05 2.24-.04z" opacity={.4} />
        <path fill="currentColor" d="M22.5 9.75c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-.8l.01-.01q.05-.87.04-2.24.01-1.37-.04-2.24v-.01z" />
    </IconBase>
  ))
);

BatteryFillDuotone.displayName = 'BatteryFillDuotone';

// Triple export pattern (lucide-react style)
export { BatteryFillDuotone, BatteryFillDuotone as BatteryFillDuotoneIcon, BatteryFillDuotone as SiBatteryFillDuotone };
export default BatteryFillDuotone;
export type { BatteryFillDuotoneProps };
