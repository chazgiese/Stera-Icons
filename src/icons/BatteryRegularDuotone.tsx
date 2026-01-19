import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BatteryRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BatteryRegularDuotone = memo(
  forwardRef<SVGSVGElement, BatteryRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="battery-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15 5.25q1.37-.01 2.24.04t1.58.32a4.8 4.8 0 0 1 2.57 2.57c.2.48.28.98.32 1.58q.05.87.04 2.24.01 1.37-.04 2.24-.04.88-.32 1.58a4.8 4.8 0 0 1-2.57 2.57q-.7.28-1.58.32-.87.05-2.24.04H7q-1.37.01-2.24-.04-.88-.04-1.58-.32a4.8 4.8 0 0 1-2.57-2.57c-.2-.48-.28-.98-.32-1.58Q.24 13.37.25 12q-.01-1.37.04-2.24c.04-.6.13-1.1.32-1.58a4.8 4.8 0 0 1 2.57-2.57q.7-.28 1.58-.32.87-.05 2.24-.04zm-8 1.5c-.94 0-1.61 0-2.14.04-.52.03-.84.1-1.1.2-.8.34-1.43.97-1.76 1.77-.11.26-.18.58-.21 1.1-.04.53-.04 1.2-.04 2.14s0 1.61.04 2.14c.03.52.1.84.2 1.1.34.8.97 1.43 1.77 1.76.26.11.58.18 1.1.21.53.04 1.2.04 2.14.04h8c.94 0 1.61 0 2.14-.04.52-.03.84-.1 1.1-.2.8-.34 1.43-.97 1.76-1.77.11-.26.18-.58.21-1.1.04-.53.04-1.2.04-2.14s0-1.61-.04-2.14c-.03-.52-.1-.84-.2-1.1A3.3 3.3 0 0 0 18.23 7c-.26-.11-.58-.18-1.1-.21-.53-.04-1.2-.04-2.14-.04z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M22.5 9.75c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-.8l.01-.01q.05-.87.04-2.24.01-1.37-.04-2.24v-.01z" />
    </IconBase>
  ))
);

BatteryRegularDuotone.displayName = 'BatteryRegularDuotone';

// Triple export pattern (lucide-react style)
export { BatteryRegularDuotone, BatteryRegularDuotone as BatteryRegularDuotoneIcon, BatteryRegularDuotone as SiBatteryRegularDuotone };
export default BatteryRegularDuotone;
export type { BatteryRegularDuotoneProps };
