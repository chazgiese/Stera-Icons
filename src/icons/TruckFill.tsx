import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TruckFillProps = Omit<IconBaseProps, 'children'>;

const TruckFill = memo(
  forwardRef<SVGSVGElement, TruckFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="truck-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 3a3 3 0 0 1 3 3h1.93c.65 0 1.27.28 1.7.77l2.63 3a3 3 0 0 1 .74 1.98v4c0 1.24-1 2.25-2.25 2.25h-.29a3.5 3.5 0 0 1-6.92 0h-3.08a3.5 3.5 0 0 1-6.93-.04A3 3 0 0 1 1 15V6a3 3 0 0 1 3-3zM7 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m10 0a1.5 1.5 0 0 0-1.5 1.5A1.5 1.5 0 1 0 17 16m-1-1.85A3.5 3.5 0 0 1 20.16 16h.59q.23-.02.25-.25v-4a1 1 0 0 0-.25-.66l-2.63-3a.3.3 0 0 0-.19-.09H16z" clipRule="evenodd" />
    </IconBase>
  ))
);

TruckFill.displayName = 'TruckFill';

// Triple export pattern (lucide-react style)
export { TruckFill, TruckFill as TruckFillIcon, TruckFill as SiTruckFill };
export default TruckFill;
export type { TruckFillProps };
