import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThermometerHighBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ThermometerHighBoldDuotone = memo(
  forwardRef<SVGSVGElement, ThermometerHighBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="thermometer-high-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 1.5a4 4 0 0 1 4 4v6.51l.06.07A5.99 5.99 0 0 1 12 22.5a6 6 0 0 1-4-10.49V5.5a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2V12c0 .64-.31 1.19-.7 1.55A3.99 3.99 0 0 0 12 20.5a4 4 0 0 0 2.7-6.95c-.39-.36-.7-.9-.7-1.55V5.5a2 2 0 0 0-2-2" clipRule="evenodd" opacity={.4} />
        <path d="M12 4.5a1 1 0 0 1 1 1v7.11c0 .64.43 1.18.92 1.59a3 3 0 1 1-3.83 0c.48-.41.91-.95.91-1.59V5.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ThermometerHighBoldDuotone.displayName = 'ThermometerHighBoldDuotone';

// Triple export pattern (lucide-react style)
export { ThermometerHighBoldDuotone, ThermometerHighBoldDuotone as ThermometerHighBoldDuotoneIcon, ThermometerHighBoldDuotone as SiThermometerHighBoldDuotone };
export default ThermometerHighBoldDuotone;
export type { ThermometerHighBoldDuotoneProps };
