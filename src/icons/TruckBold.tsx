import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TruckBoldProps = Omit<IconBaseProps, 'children'>;

const TruckBold = memo(
  forwardRef<SVGSVGElement, TruckBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="truck-bold" {...props}>
      <path fillRule="evenodd" d="M12 3.5a3 3 0 0 1 3 3h2.04c.53 0 1.05.2 1.46.54l2.45 2.1A3 3 0 0 1 22 11.42v3.83c0 1.24-1 2.25-2.25 2.25h-.29a3.5 3.5 0 0 1-6.92 0h-2.08a3.5 3.5 0 0 1-6.96-.4A3 3 0 0 1 2 14.5v-8a3 3 0 0 1 3-3zm-5 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 1 0 1.5-1.5M5 5.5a1 1 0 0 0-1 1v8a1 1 0 0 0 .13.5 3.5 3.5 0 0 1 6.03.5h2.68l.16-.3V6.5a1 1 0 0 0-1-1zm10 8.15a3.5 3.5 0 0 1 4.16 1.85h.59q.23-.02.25-.25v-3.83a1 1 0 0 0-.35-.76l-2.45-2.1a.3.3 0 0 0-.16-.06H15z" clipRule="evenodd" />
    </IconBase>
  ))
);

TruckBold.displayName = 'TruckBold';

// Triple export pattern (lucide-react style)
export { TruckBold, TruckBold as TruckBoldIcon, TruckBold as SiTruckBold };
export default TruckBold;
export type { TruckBoldProps };
