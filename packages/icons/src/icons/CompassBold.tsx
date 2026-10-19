import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CompassBoldProps = Omit<IconBaseProps, 'children'>;

const CompassBold = memo(
  forwardRef<SVGSVGElement, CompassBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.68 7.05c.36-.12.76-.02 1.03.24.27.27.36.67.24 1.03l-2 6q-.16.46-.63.63l-6 2c-.36.12-.76.02-1.03-.24-.26-.27-.36-.67-.24-1.03l2-6 .05-.1q.18-.38.58-.53zM12 10.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25c.7 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CompassBold.displayName = 'CompassBold';

// Triple export pattern
export { CompassBold, CompassBold as CompassBoldIcon, CompassBold as SiCompassBold };
export default CompassBold;
export type { CompassBoldProps };
