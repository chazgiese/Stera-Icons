import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock9RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock9RegularDuotone = memo(
  forwardRef<SVGSVGElement, Clock9RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.25c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

Clock9RegularDuotone.displayName = 'Clock9RegularDuotone';

// Triple export pattern
export { Clock9RegularDuotone, Clock9RegularDuotone as Clock9RegularDuotoneIcon, Clock9RegularDuotone as SiClock9RegularDuotone };
export default Clock9RegularDuotone;
export type { Clock9RegularDuotoneProps };
