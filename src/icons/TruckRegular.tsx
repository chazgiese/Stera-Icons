import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TruckRegularProps = Omit<IconBaseProps, 'children'>;

const TruckRegular = memo(
  forwardRef<SVGSVGElement, TruckRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="truck" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 3.25A2.75 2.75 0 0 1 15.75 6v.25h2.18a2 2 0 0 1 1.5.68l2.64 3.01c.44.5.68 1.15.68 1.81v4a2 2 0 0 1-2 2h-.51a3.25 3.25 0 0 1-6.48 0h-3.52a3.25 3.25 0 0 1-6.48-.01A2.75 2.75 0 0 1 1.25 15V6A2.75 2.75 0 0 1 4 3.25zm-6 12.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m10 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m-13-11c-.69 0-1.25.56-1.25 1.25v9c0 .69.56 1.25 1.25 1.25l.02-.04q.18-.4.45-.74l.03-.04.12-.13.04-.06.13-.12.05-.05.14-.11.05-.04a3 3 0 0 1 .58-.36l.1-.04.12-.05a3 3 0 0 1 .78-.2h.12a3 3 0 0 1 .54 0h.12a3 3 0 0 1 .78.2l.12.05.1.04a3 3 0 0 1 .58.36l.05.04.14.11.05.05.12.12.05.06.12.13.03.04q.27.33.45.74l.02.04h4q.1-.26.25-.48V6c0-.69-.56-1.25-1.25-1.25zm11.75 9.75A3.24 3.24 0 0 1 20 16.25h.75a.5.5 0 0 0 .5-.5v-4q0-.47-.31-.82l-2.63-3a.5.5 0 0 0-.38-.18h-2.18z" clipRule="evenodd" />
    </IconBase>
  ))
);

TruckRegular.displayName = 'TruckRegular';

// Triple export pattern (lucide-react style)
export { TruckRegular, TruckRegular as TruckRegularIcon, TruckRegular as SiTruckRegular };
export default TruckRegular;
export type { TruckRegularProps };
