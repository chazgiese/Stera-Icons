import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BatteryBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BatteryBoldDuotone = memo(
  forwardRef<SVGSVGElement, BatteryBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15 5q1.37-.01 2.26.04.9.04 1.65.34a5 5 0 0 1 2.7 2.7c.22.52.3 1.05.35 1.66q.05.89.04 2.26.01 1.37-.04 2.26-.04.9-.34 1.65a5 5 0 0 1-2.7 2.7c-.52.22-1.05.3-1.66.35q-.89.05-2.26.04H7q-1.37.01-2.26-.04a5 5 0 0 1-1.65-.34 5 5 0 0 1-2.7-2.7 5 5 0 0 1-.35-1.66Q-.01 13.37 0 12q-.01-1.37.04-2.26.04-.9.34-1.65a5 5 0 0 1 2.7-2.7c.52-.22 1.05-.3 1.66-.35Q5.63 4.99 7 5zM7 7c-.95 0-1.6 0-2.12.04-.5.03-.8.1-1.03.19a3 3 0 0 0-1.62 1.62c-.1.23-.16.52-.2 1.03C2 10.4 2 11.05 2 12s0 1.6.04 2.12c.03.5.1.8.19 1.03a3 3 0 0 0 1.62 1.62c.23.1.52.16 1.03.2C5.4 17 6.05 17 7 17h8c.95 0 1.6 0 2.12-.04.5-.03.8-.1 1.03-.19a3 3 0 0 0 1.62-1.62c.1-.23.16-.52.2-1.03.03-.52.03-1.17.03-2.12s0-1.6-.04-2.12c-.03-.5-.1-.8-.19-1.03a3 3 0 0 0-1.62-1.62c-.23-.1-.52-.16-1.03-.2C16.6 7 15.95 7 15 7z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M22.5 9.5c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-.56l.02-.24q.05-.89.04-2.26.01-1.37-.04-2.26l-.02-.24z" />
    </IconBase>
  ))
);

BatteryBoldDuotone.displayName = 'BatteryBoldDuotone';

export { BatteryBoldDuotone };
export type { BatteryBoldDuotoneProps };
