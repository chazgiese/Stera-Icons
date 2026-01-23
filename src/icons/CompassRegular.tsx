import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CompassRegularProps = Omit<IconBaseProps, 'children'>;

const CompassRegular = memo(
  forwardRef<SVGSVGElement, CompassRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="compass" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.14 6.57a1 1 0 0 1 1.3 1.29l-2.5 6.5a1 1 0 0 1-.58.57l-6.5 2.5a1 1 0 0 1-1.3-1.29l2.5-6.5a1 1 0 0 1 .58-.57zM12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CompassRegular.displayName = 'CompassRegular';

// Triple export pattern (lucide-react style)
export { CompassRegular, CompassRegular as CompassRegularIcon, CompassRegular as SiCompassRegular };
export default CompassRegular;
export type { CompassRegularProps };
