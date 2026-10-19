import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock8RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock8RegularDuotone = memo(
  forwardRef<SVGSVGElement, Clock8RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.25c.41 0 .75.34.75.75v5l-.02.18-.02.05-.03.09-.02.04-.05.08-.04.04-.06.07-.08.06-.03.02-.03.02-3.46 2c-.36.2-.82.08-1.02-.28-.21-.35-.09-.81.27-1.02l3.09-1.78V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

Clock8RegularDuotone.displayName = 'Clock8RegularDuotone';

// Triple export pattern
export { Clock8RegularDuotone, Clock8RegularDuotone as Clock8RegularDuotoneIcon, Clock8RegularDuotone as SiClock8RegularDuotone };
export default Clock8RegularDuotone;
export type { Clock8RegularDuotoneProps };
