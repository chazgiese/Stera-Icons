import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BatteryFullRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BatteryFullRegularDuotone = memo(
  forwardRef<SVGSVGElement, BatteryFullRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="battery-full-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.5 5.75q1.36-.01 2.25.05.89.04 1.6.37a4.3 4.3 0 0 1 1.98 1.99q.33.7.37 1.59h.8c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-.8q-.04.89-.37 1.6a4.3 4.3 0 0 1-1.99 1.98q-.7.33-1.6.37-.87.06-2.24.05h-7q-1.37.01-2.25-.05a4 4 0 0 1-1.6-.37 4.3 4.3 0 0 1-1.98-1.99q-.33-.7-.37-1.6-.06-.87-.05-2.24-.01-1.37.05-2.25.04-.89.37-1.6a4.3 4.3 0 0 1 1.99-1.98q.7-.33 1.6-.37.87-.06 2.24-.05zm-7 1.5c-.94 0-1.61 0-2.13.04s-.82.12-1.06.23c-.56.27-1.02.73-1.29 1.29-.11.24-.19.55-.23 1.06-.04.52-.04 1.19-.04 2.13s0 1.61.04 2.13.12.82.23 1.06c.27.56.73 1.02 1.29 1.29.24.11.55.19 1.06.23.52.04 1.19.04 2.13.04h7c.94 0 1.61 0 2.13-.04s.82-.12 1.06-.23a2.8 2.8 0 0 0 1.29-1.29c.11-.24.19-.55.23-1.06.04-.52.04-1.19.04-2.13s0-1.61-.04-2.13a3 3 0 0 0-.23-1.06 2.8 2.8 0 0 0-1.29-1.29c-.24-.11-.55-.19-1.06-.23-.52-.04-1.19-.04-2.13-.04z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.4 8.75q.4 0 .72.02.32 0 .67.17.5.27.77.77.17.35.17.67.02.3.02.72v1.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H6.6q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72v-1.8q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02z" />
    </IconBase>
  ))
);

BatteryFullRegularDuotone.displayName = 'BatteryFullRegularDuotone';

// Triple export pattern (lucide-react style)
export { BatteryFullRegularDuotone, BatteryFullRegularDuotone as BatteryFullRegularDuotoneIcon, BatteryFullRegularDuotone as SiBatteryFullRegularDuotone };
export default BatteryFullRegularDuotone;
export type { BatteryFullRegularDuotoneProps };
