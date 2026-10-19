import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CompassFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CompassFillDuotone = memo(
  forwardRef<SVGSVGElement, CompassFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 10.75c.69 0 1.25.56 1.25 1.25 0 .7-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m4.62 5.63c-.24-.23-.58-.31-.9-.2l-6 2q-.35.11-.51.45l-.04.1-2 6c-.1.3-.02.66.21.89.24.23.58.32.9.21l6-2q.4-.16.55-.55l2-6c.1-.32.02-.66-.21-.9" clipRule="evenodd" opacity={0.4} />
        <path fillRule="evenodd" d="M15.72 7.17c.32-.1.66-.02.9.21.23.24.31.58.21.9l-2 6c-.09.26-.3.46-.55.55l-6 2c-.32.1-.67.02-.9-.21s-.31-.58-.21-.9l2-6 .04-.1q.16-.31.51-.45zM12 10.75c-.69 0-1.25.56-1.25 1.25 0 .7.56 1.25 1.25 1.25s1.25-.56 1.25-1.25-.56-1.25-1.25-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CompassFillDuotone.displayName = 'CompassFillDuotone';

// Triple export pattern
export { CompassFillDuotone, CompassFillDuotone as CompassFillDuotoneIcon, CompassFillDuotone as SiCompassFillDuotone };
export default CompassFillDuotone;
export type { CompassFillDuotoneProps };
