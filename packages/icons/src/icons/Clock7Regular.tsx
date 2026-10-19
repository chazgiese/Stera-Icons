import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock7RegularProps = Omit<IconBaseProps, 'children'>;

const Clock7Regular = memo(
  forwardRef<SVGSVGElement, Clock7RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6.25c.41 0 .75.34.75.75v5.1l-.03.1-.02.08-.01.02-.04.07-2 3.47c-.2.36-.67.48-1.03.27-.35-.2-.48-.66-.27-1.02l1.9-3.3V7c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock7Regular.displayName = 'Clock7Regular';

// Triple export pattern
export { Clock7Regular, Clock7Regular as Clock7RegularIcon, Clock7Regular as SiClock7Regular };
export default Clock7Regular;
export type { Clock7RegularProps };
