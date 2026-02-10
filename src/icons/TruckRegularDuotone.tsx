import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TruckRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TruckRegularDuotone = memo(
  forwardRef<SVGSVGElement, TruckRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="truck-duotone" {...props}>
      <path d="M12 3.75a2.75 2.75 0 0 1 2.75 2.75v.25h2.29a2 2 0 0 1 1.3.48l2.45 2.1c.6.52.96 1.29.96 2.09v3.83a2 2 0 0 1-2 2h-.51a3 3 0 0 0-.24-1.5h.75a.5.5 0 0 0 .5-.5v-3.83q-.01-.57-.44-.95l-2.45-2.1a.5.5 0 0 0-.32-.12h-2.29V14q-.95.4-1.5 1.27V6.5c0-.69-.56-1.25-1.25-1.25H5c-.69 0-1.25.56-1.25 1.25v8c0 .37.16.7.4.92q-.37.68-.4 1.53a2.8 2.8 0 0 1-1.5-2.45v-8A2.75 2.75 0 0 1 5 3.75z" opacity={0.4} />
        <path d="M13 15.75a3 3 0 0 0-.24 1.5h-2.52a3 3 0 0 0-.24-1.5z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M7 13.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.74 1.74 0 0 0-1.73 2 1.75 1.75 0 1 0 1.73-2M16 13.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.74 1.74 0 0 0-1.73 2 1.75 1.75 0 1 0 1.73-2" clipRule="evenodd" />
    </IconBase>
  ))
);

TruckRegularDuotone.displayName = 'TruckRegularDuotone';

// Triple export pattern (lucide-react style)
export { TruckRegularDuotone, TruckRegularDuotone as TruckRegularDuotoneIcon, TruckRegularDuotone as SiTruckRegularDuotone };
export default TruckRegularDuotone;
export type { TruckRegularDuotoneProps };
