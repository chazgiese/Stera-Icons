import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThermometerMediumFillProps = Omit<IconBaseProps, 'children'>;

const ThermometerMediumFill = memo(
  forwardRef<SVGSVGElement, ThermometerMediumFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="thermometer-medium-fill" {...props}>
      <path fillRule="evenodd" d="M12 1.5a4 4 0 0 1 4 4v6.51l.06.07A5.99 5.99 0 0 1 12 22.5a6 6 0 0 1-4-10.49V5.5a4 4 0 0 1 4-4m0 6a1 1 0 0 0-1 1v4.11c0 .64-.43 1.18-.92 1.59a3 3 0 1 0 3.83 0c-.48-.41-.91-.95-.91-1.59V8.5a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

ThermometerMediumFill.displayName = 'ThermometerMediumFill';

// Triple export pattern (lucide-react style)
export { ThermometerMediumFill, ThermometerMediumFill as ThermometerMediumFillIcon, ThermometerMediumFill as SiThermometerMediumFill };
export default ThermometerMediumFill;
export type { ThermometerMediumFillProps };
