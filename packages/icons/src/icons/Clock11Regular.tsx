import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock11RegularProps = Omit<IconBaseProps, 'children'>;

const Clock11Regular = memo(
  forwardRef<SVGSVGElement, Clock11RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6.25c.41 0 .75.34.75.75v5.06l-.02.11-.02.07-.03.07-.03.05-.04.07-.05.06-.05.05-.08.08h-.02l-.04.03-.07.04h-.02l-.09.03-.09.02h-.01l-.09.01h-.06l-.11-.02-.07-.02-.07-.03-.06-.03-.07-.04-.04-.04-.07-.06-.07-.08v-.02l-.03-.04-2-3.46c-.2-.36-.08-.82.28-1.02.35-.21.81-.09 1.02.27l.6 1.04V7c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock11Regular.displayName = 'Clock11Regular';

// Triple export pattern
export { Clock11Regular, Clock11Regular as Clock11RegularIcon, Clock11Regular as SiClock11Regular };
export default Clock11Regular;
export type { Clock11RegularProps };
