import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CompassFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CompassFillDuotone = memo(
  forwardRef<SVGSVGElement, CompassFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="compass-fill-duotone" {...props}>
      <path d="M12 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m4.7 5.3a1 1 0 0 0-1.02-.25l-6 2a1 1 0 0 0-.58.53l-.05.1-2 6a1 1 0 0 0 1.27 1.27l6-2a1 1 0 0 0 .63-.63l2-6a1 1 0 0 0-.24-1.03" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.68 7.05a1 1 0 0 1 1.27 1.27l-2 6a1 1 0 0 1-.63.63l-6 2a1 1 0 0 1-1.27-1.27l2-6 .05-.1a1 1 0 0 1 .58-.53zM12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CompassFillDuotone.displayName = 'CompassFillDuotone';

// Triple export pattern (lucide-react style)
export { CompassFillDuotone, CompassFillDuotone as CompassFillDuotoneIcon, CompassFillDuotone as SiCompassFillDuotone };
export default CompassFillDuotone;
export type { CompassFillDuotoneProps };
