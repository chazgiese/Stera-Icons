import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ThermometerMediumFillProps = Omit<IconBaseProps, 'children'>;

const ThermometerMediumFill = memo(
  forwardRef<SVGSVGElement, ThermometerMediumFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a4 4 0 0 1 4 4v7.51l.06.07A5.99 5.99 0 0 1 12 23a6 6 0 0 1-4-10.49V5a4 4 0 0 1 4-4m0 7a1 1 0 0 0-1 1v4.11c0 .64-.43 1.18-.92 1.59a3 3 0 1 0 3.83 0c-.48-.41-.91-.95-.91-1.59V9a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

ThermometerMediumFill.displayName = 'ThermometerMediumFill';

// Triple export pattern (lucide-react style)
export { ThermometerMediumFill, ThermometerMediumFill as ThermometerMediumFillIcon, ThermometerMediumFill as SiThermometerMediumFill };
export type { ThermometerMediumFillProps };
