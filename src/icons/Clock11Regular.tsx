import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock11RegularProps = Omit<IconBaseProps, 'children'>;

const Clock11Regular = memo(
  forwardRef<SVGSVGElement, Clock11RegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-11" {...props}>
      <path fill="currentColor" d="M12 5.25c.41 0 .75.34.75.75v6.06a1 1 0 0 1-.07.25l-.03.05-.04.07-.05.06-.13.13h-.02l-.04.03-.07.04h-.02l-.09.03-.09.02h-.01l-.09.01h-.06l-.11-.02-.07-.02-.07-.03-.06-.03-.07-.04-.04-.04-.14-.14v-.02l-.03-.04-2-3.46a.75.75 0 0 1 1.3-.75l.6 1.04V6c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock11Regular.displayName = 'Clock11Regular';

// Triple export pattern (lucide-react style)
export { Clock11Regular, Clock11Regular as Clock11RegularIcon, Clock11Regular as SiClock11Regular };
export type { Clock11RegularProps };
