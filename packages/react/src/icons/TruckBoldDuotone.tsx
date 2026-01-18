import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TruckBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TruckBoldDuotone = memo(
  forwardRef<SVGSVGElement, TruckBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 3a3 3 0 0 1 3 3h1.93c.65 0 1.27.28 1.7.77l2.63 3a3 3 0 0 1 .74 1.98v4c0 1.24-1 2.25-2.25 2.25h-.29a3.5 3.5 0 0 0-.3-2h.59q.23-.02.25-.25v-4a1 1 0 0 0-.25-.66l-2.63-3a.3.3 0 0 0-.19-.09H16v6.15a3.5 3.5 0 0 0-2 1.55V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9c0 .5.37.91.84.99a3.5 3.5 0 0 0-.3 1.97A3 3 0 0 1 1 15V6a3 3 0 0 1 3-3z" />
        <path d="M13.84 16a3.5 3.5 0 0 0-.3 2h-3.08a3.5 3.5 0 0 0-.3-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M7 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M17 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

TruckBoldDuotone.displayName = 'TruckBoldDuotone';

export { TruckBoldDuotone };
export type { TruckBoldDuotoneProps };
