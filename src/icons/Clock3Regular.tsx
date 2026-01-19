import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock3RegularProps = Omit<IconBaseProps, 'children'>;

const Clock3Regular = memo(
  forwardRef<SVGSVGElement, Clock3RegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-3" {...props}>
      <path fill="currentColor" d="M12 5.25c.41 0 .75.34.75.75v5.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V6c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock3Regular.displayName = 'Clock3Regular';

// Triple export pattern (lucide-react style)
export { Clock3Regular, Clock3Regular as Clock3RegularIcon, Clock3Regular as SiClock3Regular };
export type { Clock3RegularProps };
