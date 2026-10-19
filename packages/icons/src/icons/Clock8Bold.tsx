import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock8BoldProps = Omit<IconBaseProps, 'children'>;

const Clock8Bold = memo(
  forwardRef<SVGSVGElement, Clock8BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6c.55 0 1 .45 1 1v5q0 .29-.14.51l-.02.02-.03.06-.02.03-.04.03q0 .03-.03.04l-.04.04-.03.03-.05.04-.02.01-.07.05h-.01l-3.46 2c-.48.28-1.1.12-1.37-.36-.28-.48-.11-1.09.37-1.37l2.96-1.7V7c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock8Bold.displayName = 'Clock8Bold';

// Triple export pattern
export { Clock8Bold, Clock8Bold as Clock8BoldIcon, Clock8Bold as SiClock8Bold };
export default Clock8Bold;
export type { Clock8BoldProps };
