import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThermometerMediumBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ThermometerMediumBoldDuotone = memo(
  forwardRef<SVGSVGElement, ThermometerMediumBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="thermometer-medium-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.5a4 4 0 0 1 4 4v6.51l.06.07A5.99 5.99 0 0 1 12 22.5a6 6 0 0 1-4-10.49V5.5a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2V12c0 .64-.31 1.19-.7 1.55A3.99 3.99 0 0 0 12 20.5a4 4 0 0 0 2.7-6.95c-.39-.36-.7-.9-.7-1.55V5.5a2 2 0 0 0-2-2" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 7.5a1 1 0 0 1 1 1v4.11c0 .64.43 1.18.92 1.59a3 3 0 1 1-3.83 0c.48-.41.91-.95.91-1.59V8.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ThermometerMediumBoldDuotone.displayName = 'ThermometerMediumBoldDuotone';

// Triple export pattern (lucide-react style)
export { ThermometerMediumBoldDuotone, ThermometerMediumBoldDuotone as ThermometerMediumBoldDuotoneIcon, ThermometerMediumBoldDuotone as SiThermometerMediumBoldDuotone };
export default ThermometerMediumBoldDuotone;
export type { ThermometerMediumBoldDuotoneProps };
