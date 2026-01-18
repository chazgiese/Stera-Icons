import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TruckFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TruckFillDuotone = memo(
  forwardRef<SVGSVGElement, TruckFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13 3a3 3 0 0 1 3 3h1.93c.65 0 1.27.28 1.7.77l2.63 3a3 3 0 0 1 .74 1.98v4c0 1.24-1 2.25-2.25 2.25h-.29a3.5 3.5 0 0 0-.3-2h.59q.23-.02.25-.25v-4a1 1 0 0 0-.25-.66l-2.63-3a.3.3 0 0 0-.19-.09H16v6.15A3.5 3.5 0 0 0 13.54 18h-3.08q.04-.24.04-.5a3.5 3.5 0 1 0-6.97.46A3 3 0 0 1 1 15V6a3 3 0 0 1 3-3z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M7 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M17 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

TruckFillDuotone.displayName = 'TruckFillDuotone';

// Triple export pattern (lucide-react style)
export { TruckFillDuotone, TruckFillDuotone as TruckFillDuotoneIcon, TruckFillDuotone as SiTruckFillDuotone };
export type { TruckFillDuotoneProps };
