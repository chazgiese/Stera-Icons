import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock1RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock1RegularDuotone = memo(
  forwardRef<SVGSVGElement, Clock1RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.25c.41 0 .75.34.75.75v2.2l.6-1.04c.2-.36.67-.48 1.03-.27.35.2.48.66.27 1.02l-2 3.47-.02.03-.01.02-.08.08-.06.06-.04.04-.07.04-.06.03-.07.03-.07.02-.11.02h-.16l-.1-.03-.08-.02-.02-.01-.07-.04-.04-.02-.02-.01-.08-.08-.05-.05-.05-.06-.04-.07-.03-.05-.03-.07-.02-.07-.02-.17V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

Clock1RegularDuotone.displayName = 'Clock1RegularDuotone';

// Triple export pattern
export { Clock1RegularDuotone, Clock1RegularDuotone as Clock1RegularDuotoneIcon, Clock1RegularDuotone as SiClock1RegularDuotone };
export default Clock1RegularDuotone;
export type { Clock1RegularDuotoneProps };
