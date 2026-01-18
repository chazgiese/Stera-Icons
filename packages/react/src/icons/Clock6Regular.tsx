import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock6RegularProps = Omit<IconBaseProps, 'children'>;

const Clock6Regular = memo(
  forwardRef<SVGSVGElement, Clock6RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 5.25c.41 0 .75.34.75.75v10a.75.75 0 0 1-1.5 0V6c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock6Regular.displayName = 'Clock6Regular';

// Triple export pattern (lucide-react style)
export { Clock6Regular, Clock6Regular as Clock6RegularIcon, Clock6Regular as SiClock6Regular };
export type { Clock6RegularProps };
