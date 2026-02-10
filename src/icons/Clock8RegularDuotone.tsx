import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock8RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock8RegularDuotone = memo(
  forwardRef<SVGSVGElement, Clock8RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-8-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 6.25c.41 0 .75.34.75.75v5a1 1 0 0 1-.07.32l-.02.04-.05.08-.04.04-.17.15-.03.02-3.46 2a.75.75 0 1 1-.75-1.3l3.09-1.78V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

Clock8RegularDuotone.displayName = 'Clock8RegularDuotone';

// Triple export pattern (lucide-react style)
export { Clock8RegularDuotone, Clock8RegularDuotone as Clock8RegularDuotoneIcon, Clock8RegularDuotone as SiClock8RegularDuotone };
export default Clock8RegularDuotone;
export type { Clock8RegularDuotoneProps };
