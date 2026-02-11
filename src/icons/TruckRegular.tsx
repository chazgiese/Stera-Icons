import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TruckRegularProps = Omit<IconBaseProps, 'children'>;

const TruckRegular = memo(
  forwardRef<SVGSVGElement, TruckRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="truck" {...props}>
      <path fillRule="evenodd" d="M12 3.75a2.75 2.75 0 0 1 2.75 2.75v.25h2.29a2 2 0 0 1 1.3.48l2.45 2.1c.6.52.96 1.29.96 2.09v3.83a2 2 0 0 1-2 2h-.51a3.25 3.25 0 0 1-6.48 0h-2.52A3.25 3.25 0 0 1 3.75 17v-.05a2.8 2.8 0 0 1-1.5-2.45v-8A2.75 2.75 0 0 1 5 3.75zm-5 11.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m9 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m-11-10c-.69 0-1.25.56-1.25 1.25v8c0 .37.16.7.4.92a3.25 3.25 0 0 1 5.85.33h3q.1-.25.25-.48V6.5c0-.69-.56-1.25-1.25-1.25zM14.75 14A3.24 3.24 0 0 1 19 15.75h.75a.5.5 0 0 0 .5-.5v-3.83q-.01-.57-.44-.95l-2.45-2.1a.5.5 0 0 0-.32-.12h-2.29z" clipRule="evenodd" />
    </IconBase>
  ))
);

TruckRegular.displayName = 'TruckRegular';

// Triple export pattern (lucide-react style)
export { TruckRegular, TruckRegular as TruckRegularIcon, TruckRegular as SiTruckRegular };
export default TruckRegular;
export type { TruckRegularProps };
