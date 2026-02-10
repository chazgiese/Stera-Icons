import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GlobeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GlobeRegularDuotone = memo(
  forwardRef<SVGSVGElement, GlobeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="globe-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5.75.75 0 0 0 .54-1.26q-.28-.3-.54-.63a12.35 12.35 0 0 0 0-15.72q.25-.32.54-.63A.75.75 0 0 0 12 2.25m4.3 10.5c-.13 2.58-.99 5.12-2.56 7.31a8.25 8.25 0 0 0 6.47-7.31zm-2.56-8.81a14 14 0 0 1 2.57 7.31h3.9a8.25 8.25 0 0 0-6.47-7.31" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .54 1.26 12.3 12.3 0 0 0-3.34 7.74h5.6q.04.75 0 1.5H9.2c.17 2.8 1.28 5.55 3.34 7.74a.75.75 0 0 1-.54 1.26 9.75 9.75 0 1 1 0-19.5m-8.22 10.5c.33 3.62 3 6.57 6.48 7.31a14 14 0 0 1-2.56-7.31zm6.48-8.81a8.25 8.25 0 0 0-6.48 7.31H7.7c.13-2.58.99-5.12 2.56-7.31" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeRegularDuotone.displayName = 'GlobeRegularDuotone';

// Triple export pattern (lucide-react style)
export { GlobeRegularDuotone, GlobeRegularDuotone as GlobeRegularDuotoneIcon, GlobeRegularDuotone as SiGlobeRegularDuotone };
export default GlobeRegularDuotone;
export type { GlobeRegularDuotoneProps };
