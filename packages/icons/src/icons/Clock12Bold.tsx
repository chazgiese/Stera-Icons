import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock12BoldProps = Omit<IconBaseProps, 'children'>;

const Clock12Bold = memo(
  forwardRef<SVGSVGElement, Clock12BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock12Bold.displayName = 'Clock12Bold';

// Triple export pattern
export { Clock12Bold, Clock12Bold as Clock12BoldIcon, Clock12Bold as SiClock12Bold };
export default Clock12Bold;
export type { Clock12BoldProps };
