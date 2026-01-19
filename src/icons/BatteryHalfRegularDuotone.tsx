import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BatteryHalfRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BatteryHalfRegularDuotone = memo(
  forwardRef<SVGSVGElement, BatteryHalfRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="battery-half-duotone" {...props}>
      <path fill="currentColor" d="M9.4 8.25q.4 0 .72.02.32 0 .67.17.5.27.77.77.17.35.17.67.02.3.02.72v2.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H5.6q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67l-.02-.34V10.6q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02z" />
        <path fill="currentColor" fillRule="evenodd" d="M15 5.25q1.37-.01 2.24.04t1.58.32a4.8 4.8 0 0 1 2.57 2.57q.28.7.32 1.57h.79c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-.8a5 5 0 0 1-.31 1.57 4.8 4.8 0 0 1-2.57 2.57q-.7.28-1.58.32-.87.05-2.24.04H7q-1.37.01-2.24-.04-.88-.04-1.58-.32a4.8 4.8 0 0 1-2.57-2.57c-.2-.48-.28-.98-.32-1.58Q.24 13.37.25 12q-.01-1.37.04-2.24c.04-.6.13-1.1.32-1.58a4.8 4.8 0 0 1 2.57-2.57q.7-.28 1.58-.32.87-.05 2.24-.04zm-8 1.5c-.94 0-1.61 0-2.14.04-.52.03-.84.1-1.1.2-.8.34-1.43.97-1.76 1.77-.11.26-.18.58-.21 1.1-.04.53-.04 1.2-.04 2.14s0 1.61.04 2.14c.03.52.1.84.2 1.1.34.8.97 1.43 1.77 1.76.26.11.58.18 1.1.21.53.04 1.2.04 2.14.04h8c.94 0 1.61 0 2.14-.04.52-.03.84-.1 1.1-.2.8-.34 1.43-.97 1.76-1.77.11-.26.18-.58.21-1.1.04-.53.04-1.2.04-2.14s0-1.61-.04-2.14c-.03-.52-.1-.84-.2-1.1A3.3 3.3 0 0 0 18.23 7c-.26-.11-.58-.18-1.1-.21-.53-.04-1.2-.04-2.14-.04z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

BatteryHalfRegularDuotone.displayName = 'BatteryHalfRegularDuotone';

// Triple export pattern (lucide-react style)
export { BatteryHalfRegularDuotone, BatteryHalfRegularDuotone as BatteryHalfRegularDuotoneIcon, BatteryHalfRegularDuotone as SiBatteryHalfRegularDuotone };
export type { BatteryHalfRegularDuotoneProps };
