import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock12RegularProps = Omit<IconBaseProps, 'children'>;

const Clock12Regular = memo(
  forwardRef<SVGSVGElement, Clock12RegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-12" {...props}>
      <path fill="currentColor" d="M12 5.25c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V6c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock12Regular.displayName = 'Clock12Regular';

// Triple export pattern (lucide-react style)
export { Clock12Regular, Clock12Regular as Clock12RegularIcon, Clock12Regular as SiClock12Regular };
export type { Clock12RegularProps };
