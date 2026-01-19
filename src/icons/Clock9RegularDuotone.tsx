import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock9RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock9RegularDuotone = memo(
  forwardRef<SVGSVGElement, Clock9RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-9-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5.25c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75H8a.75.75 0 0 1 0-1.5h3.25V6c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

Clock9RegularDuotone.displayName = 'Clock9RegularDuotone';

// Triple export pattern (lucide-react style)
export { Clock9RegularDuotone, Clock9RegularDuotone as Clock9RegularDuotoneIcon, Clock9RegularDuotone as SiClock9RegularDuotone };
export default Clock9RegularDuotone;
export type { Clock9RegularDuotoneProps };
