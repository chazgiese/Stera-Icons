import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TruckFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TruckFillDuotone = memo(
  forwardRef<SVGSVGElement, TruckFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="truck-fill-duotone" {...props}>
      <path fill="currentColor" d="M12 3.5a3 3 0 0 1 3 3h2.04c.53 0 1.05.2 1.46.54l2.45 2.1A3 3 0 0 1 22 11.42v3.83c0 1.24-1 2.25-2.25 2.25h-.29a3.5 3.5 0 0 0-.3-2h.59q.23-.02.25-.25v-3.83a1 1 0 0 0-.35-.76l-2.45-2.1a.3.3 0 0 0-.16-.06H15v5.15a3.5 3.5 0 0 0-2.46 3.85h-2.08q.04-.24.04-.5a3.5 3.5 0 1 0-7 0v.1A3 3 0 0 1 2 14.5v-8a3 3 0 0 1 3-3z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M7 13.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M16 13.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

TruckFillDuotone.displayName = 'TruckFillDuotone';

// Triple export pattern (lucide-react style)
export { TruckFillDuotone, TruckFillDuotone as TruckFillDuotoneIcon, TruckFillDuotone as SiTruckFillDuotone };
export default TruckFillDuotone;
export type { TruckFillDuotoneProps };
