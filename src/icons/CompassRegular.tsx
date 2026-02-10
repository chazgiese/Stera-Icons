import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CompassRegularProps = Omit<IconBaseProps, 'children'>;

const CompassRegular = memo(
  forwardRef<SVGSVGElement, CompassRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="compass" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.76 7.29a.75.75 0 0 1 .95.95l-2 6a.8.8 0 0 1-.47.47l-6 2a.75.75 0 0 1-.95-.95l2-6q.12-.35.47-.47zM12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CompassRegular.displayName = 'CompassRegular';

// Triple export pattern (lucide-react style)
export { CompassRegular, CompassRegular as CompassRegularIcon, CompassRegular as SiCompassRegular };
export default CompassRegular;
export type { CompassRegularProps };
