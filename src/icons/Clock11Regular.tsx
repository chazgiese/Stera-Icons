import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock11RegularProps = Omit<IconBaseProps, 'children'>;

const Clock11Regular = memo(
  forwardRef<SVGSVGElement, Clock11RegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-11" {...props}>
      <path d="M12 6.25c.41 0 .75.34.75.75v5.06a1 1 0 0 1-.07.25l-.03.05-.04.07-.05.06-.13.13h-.02l-.04.03-.07.04h-.02l-.09.03-.09.02h-.01l-.09.01h-.06l-.11-.02-.07-.02-.07-.03-.06-.03-.07-.04-.04-.04-.14-.15v-.01l-.03-.04-2-3.46a.75.75 0 0 1 1.3-.75l.6 1.04V7c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock11Regular.displayName = 'Clock11Regular';

// Triple export pattern (lucide-react style)
export { Clock11Regular, Clock11Regular as Clock11RegularIcon, Clock11Regular as SiClock11Regular };
export default Clock11Regular;
export type { Clock11RegularProps };
