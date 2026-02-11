import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThermometerMediumRegularProps = Omit<IconBaseProps, 'children'>;

const ThermometerMediumRegular = memo(
  forwardRef<SVGSVGElement, ThermometerMediumRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="thermometer-medium" {...props}>
      <path d="M12 7.75c.41 0 .75.34.75.75v4.11c0 .75.5 1.36 1 1.78a2.75 2.75 0 1 1-3.52 0c.52-.42 1.02-1.03 1.02-1.78V8.5c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 1.75a3.75 3.75 0 0 1 3.75 3.75V12q-.01.11.14.27A5.74 5.74 0 0 1 12 22.25a5.75 5.75 0 0 1-3.9-9.98q.16-.16.15-.27V5.5A3.75 3.75 0 0 1 12 1.75m0 1.5c-1.24 0-2.25 1-2.25 2.25V12c0 .56-.27 1.04-.63 1.37A4.24 4.24 0 0 0 12 20.75a4.25 4.25 0 0 0 2.88-7.38c-.36-.33-.63-.8-.63-1.37V5.5c0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ThermometerMediumRegular.displayName = 'ThermometerMediumRegular';

// Triple export pattern (lucide-react style)
export { ThermometerMediumRegular, ThermometerMediumRegular as ThermometerMediumRegularIcon, ThermometerMediumRegular as SiThermometerMediumRegular };
export default ThermometerMediumRegular;
export type { ThermometerMediumRegularProps };
