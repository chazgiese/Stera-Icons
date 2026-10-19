import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock7BoldProps = Omit<IconBaseProps, 'children'>;

const Clock7Bold = memo(
  forwardRef<SVGSVGElement, Clock7BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6c.55 0 1 .45 1 1v5q0 .1-.02.18v.03l-.01.04-.02.06-.01.03-.02.06-.02.04-.03.04v.02l-2 3.46c-.28.48-.9.65-1.37.37s-.64-.89-.37-1.37L11 11.73V7c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock7Bold.displayName = 'Clock7Bold';

// Triple export pattern
export { Clock7Bold, Clock7Bold as Clock7BoldIcon, Clock7Bold as SiClock7Bold };
export default Clock7Bold;
export type { Clock7BoldProps };
