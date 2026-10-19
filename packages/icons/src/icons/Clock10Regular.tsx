import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock10RegularProps = Omit<IconBaseProps, 'children'>;

const Clock10Regular = memo(
  forwardRef<SVGSVGElement, Clock10RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6.25c.41 0 .75.34.75.75v5q0 .1-.03.2l-.02.07-.02.03q0 .04-.03.07l-.02.03-.02.03-.06.08-.07.06-.04.04-.08.04-.05.03-.07.03-.07.02-.11.02h-.16l-.1-.03-.08-.03h-.02l-.08-.04-3.46-2c-.36-.2-.48-.67-.27-1.03.2-.35.66-.48 1.02-.27l2.34 1.35V7c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock10Regular.displayName = 'Clock10Regular';

// Triple export pattern
export { Clock10Regular, Clock10Regular as Clock10RegularIcon, Clock10Regular as SiClock10Regular };
export default Clock10Regular;
export type { Clock10RegularProps };
