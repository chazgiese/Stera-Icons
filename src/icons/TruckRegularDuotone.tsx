import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TruckRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TruckRegularDuotone = memo(
  forwardRef<SVGSVGElement, TruckRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="truck-duotone" {...props}>
      <path d="M14 16.25a3 3 0 0 0-.24 1.5h-3.52a3 3 0 0 0-.24-1.5z" opacity={0.4} />
        <path d="M13 3.25A2.75 2.75 0 0 1 15.75 6v.25h2.18a2 2 0 0 1 1.5.68l2.64 3.01c.44.5.68 1.15.68 1.81v4a2 2 0 0 1-2 2h-.51a3 3 0 0 0-.24-1.5h.75a.5.5 0 0 0 .5-.5v-4q0-.47-.31-.82l-2.63-3a.5.5 0 0 0-.38-.18h-2.18v6.75q-.95.4-1.5 1.27V6c0-.69-.56-1.25-1.25-1.25H4c-.69 0-1.25.56-1.25 1.25v9c0 .69.56 1.25 1.25 1.25a3 3 0 0 0-.24 1.49A2.75 2.75 0 0 1 1.25 15V6A2.75 2.75 0 0 1 4 3.25z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M7 14.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M17 14.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

TruckRegularDuotone.displayName = 'TruckRegularDuotone';

// Triple export pattern (lucide-react style)
export { TruckRegularDuotone, TruckRegularDuotone as TruckRegularDuotoneIcon, TruckRegularDuotone as SiTruckRegularDuotone };
export default TruckRegularDuotone;
export type { TruckRegularDuotoneProps };
