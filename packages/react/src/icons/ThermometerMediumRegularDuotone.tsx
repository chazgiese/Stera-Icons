import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ThermometerMediumRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ThermometerMediumRegularDuotone = memo(
  forwardRef<SVGSVGElement, ThermometerMediumRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25A3.75 3.75 0 0 1 15.75 5v7.5q-.01.11.14.27A5.74 5.74 0 0 1 12 22.75a5.75 5.75 0 0 1-3.9-9.98q.16-.16.15-.27V5A3.75 3.75 0 0 1 12 1.25m0 1.5c-1.24 0-2.25 1-2.25 2.25v7.5c0 .56-.27 1.04-.63 1.37A4.24 4.24 0 0 0 12 21.25a4.25 4.25 0 0 0 2.88-7.38c-.36-.33-.63-.8-.63-1.37V5c0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 8.25c.41 0 .75.34.75.75v4.11c0 .75.5 1.36 1 1.78a2.75 2.75 0 1 1-3.52 0c.52-.42 1.02-1.03 1.02-1.78V9c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ThermometerMediumRegularDuotone.displayName = 'ThermometerMediumRegularDuotone';

export { ThermometerMediumRegularDuotone };
export type { ThermometerMediumRegularDuotoneProps };
