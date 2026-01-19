import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TruckBoldProps = Omit<IconBaseProps, 'children'>;

const TruckBold = memo(
  forwardRef<SVGSVGElement, TruckBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="truck-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 3a3 3 0 0 1 3 3h1.93c.65 0 1.27.28 1.7.77l2.63 3a3 3 0 0 1 .74 1.98v4c0 1.24-1 2.25-2.25 2.25h-.29a3.5 3.5 0 0 1-6.92 0h-3.08a3.5 3.5 0 0 1-6.93-.04A3 3 0 0 1 1 15V6a3 3 0 0 1 3-3zM7 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m10 0a1.5 1.5 0 0 0-1.5 1.5A1.5 1.5 0 1 0 17 16M4 5a1 1 0 0 0-1 1v9c0 .5.37.91.84.99a3.5 3.5 0 0 1 6.32.01h3.68l.16-.3V6a1 1 0 0 0-1-1zm12 9.15A3.5 3.5 0 0 1 20.16 16h.59q.23-.02.25-.25v-4a1 1 0 0 0-.25-.66l-2.63-3a.3.3 0 0 0-.19-.09H16z" clipRule="evenodd" />
    </IconBase>
  ))
);

TruckBold.displayName = 'TruckBold';

// Triple export pattern (lucide-react style)
export { TruckBold, TruckBold as TruckBoldIcon, TruckBold as SiTruckBold };
export type { TruckBoldProps };
