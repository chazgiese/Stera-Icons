import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock3RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock3RegularDuotone = memo(
  forwardRef<SVGSVGElement, Clock3RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-3-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5.25c.41 0 .75.34.75.75v5.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V6c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

Clock3RegularDuotone.displayName = 'Clock3RegularDuotone';

// Triple export pattern (lucide-react style)
export { Clock3RegularDuotone, Clock3RegularDuotone as Clock3RegularDuotoneIcon, Clock3RegularDuotone as SiClock3RegularDuotone };
export default Clock3RegularDuotone;
export type { Clock3RegularDuotoneProps };
