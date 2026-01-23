import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CompassFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CompassFillDuotone = memo(
  forwardRef<SVGSVGElement, CompassFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="compass-fill-duotone" {...props}>
      <path d="M12 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m5.2 5.54a1 1 0 0 0-1.06-.22l-6.5 2.5a1 1 0 0 0-.57.57l-2.5 6.5a1 1 0 0 0 1.29 1.3l6.5-2.5a1 1 0 0 0 .57-.58l2.5-6.5a1 1 0 0 0-.22-1.07" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M16.14 6.57a1 1 0 0 1 1.3 1.29l-2.5 6.5a1 1 0 0 1-.58.57l-6.5 2.5a1 1 0 0 1-1.3-1.29l2.5-6.5a1 1 0 0 1 .58-.57zM12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CompassFillDuotone.displayName = 'CompassFillDuotone';

// Triple export pattern (lucide-react style)
export { CompassFillDuotone, CompassFillDuotone as CompassFillDuotoneIcon, CompassFillDuotone as SiCompassFillDuotone };
export default CompassFillDuotone;
export type { CompassFillDuotoneProps };
