import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CompassRegularProps = Omit<IconBaseProps, 'children'>;

const CompassRegular = memo(
  forwardRef<SVGSVGElement, CompassRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.76 7.29c.27-.1.57-.02.77.18s.27.5.18.77l-2 6q-.12.35-.47.47l-6 2c-.27.1-.57.02-.77-.18s-.27-.5-.18-.77l2-6q.12-.35.47-.47zM12 10.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CompassRegular.displayName = 'CompassRegular';

// Triple export pattern
export { CompassRegular, CompassRegular as CompassRegularIcon, CompassRegular as SiCompassRegular };
export default CompassRegular;
export type { CompassRegularProps };
