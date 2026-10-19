import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CompassFillProps = Omit<IconBaseProps, 'children'>;

const CompassFill = memo(
  forwardRef<SVGSVGElement, CompassFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 10.75c.7 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m4.62 5.63c-.23-.23-.58-.31-.9-.21l-6 2q-.35.13-.51.46l-.04.1-2 6c-.1.3-.02.65.21.89.24.23.58.31.9.21l6-2q.4-.15.55-.55l2-6c.1-.32.02-.66-.21-.9" clipRule="evenodd" />
    </IconBase>
  ))
);

CompassFill.displayName = 'CompassFill';

// Triple export pattern
export { CompassFill, CompassFill as CompassFillIcon, CompassFill as SiCompassFill };
export default CompassFill;
export type { CompassFillProps };
