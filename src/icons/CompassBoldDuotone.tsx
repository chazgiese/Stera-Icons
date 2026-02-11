import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CompassBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CompassBoldDuotone = memo(
  forwardRef<SVGSVGElement, CompassBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="compass-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M15.68 7.05a1 1 0 0 1 1.27 1.27l-2 6a1 1 0 0 1-.63.63l-6 2a1 1 0 0 1-1.27-1.27l2-6 .05-.1a1 1 0 0 1 .58-.53zM12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CompassBoldDuotone.displayName = 'CompassBoldDuotone';

// Triple export pattern (lucide-react style)
export { CompassBoldDuotone, CompassBoldDuotone as CompassBoldDuotoneIcon, CompassBoldDuotone as SiCompassBoldDuotone };
export default CompassBoldDuotone;
export type { CompassBoldDuotoneProps };
