import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock4RegularProps = Omit<IconBaseProps, 'children'>;

const Clock4Regular = memo(
  forwardRef<SVGSVGElement, Clock4RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6.25c.41 0 .75.34.75.75v4.57l3.09 1.78c.36.2.48.67.27 1.03-.2.35-.66.48-1.02.27l-3.46-2-.04-.02-.02-.01-.08-.08-.05-.05-.05-.06-.04-.06-.03-.06-.03-.07-.02-.07-.02-.17V7c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock4Regular.displayName = 'Clock4Regular';

// Triple export pattern
export { Clock4Regular, Clock4Regular as Clock4RegularIcon, Clock4Regular as SiClock4Regular };
export default Clock4Regular;
export type { Clock4RegularProps };
