import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock2RegularProps = Omit<IconBaseProps, 'children'>;

const Clock2Regular = memo(
  forwardRef<SVGSVGElement, Clock2RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6.25c.41 0 .75.34.75.75v3.7l2.34-1.35c.36-.2.82-.08 1.02.28.21.35.09.81-.27 1.02l-3.46 2-.08.04h-.02l-.09.03-.09.02h-.01l-.09.01h-.06l-.11-.02-.07-.02-.07-.03-.06-.03-.06-.04-.06-.05-.05-.05-.08-.08v-.02l-.03-.04-.04-.07v-.02l-.03-.09-.02-.09v-.01l-.01-.09V7c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock2Regular.displayName = 'Clock2Regular';

// Triple export pattern
export { Clock2Regular, Clock2Regular as Clock2RegularIcon, Clock2Regular as SiClock2Regular };
export default Clock2Regular;
export type { Clock2RegularProps };
