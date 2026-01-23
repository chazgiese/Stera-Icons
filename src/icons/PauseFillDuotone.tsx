import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PauseFillDuotone = memo(
  forwardRef<SVGSVGElement, PauseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pause-fill-duotone" {...props}>
      <path d="M8 4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM18 4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M8 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM18 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-2 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

PauseFillDuotone.displayName = 'PauseFillDuotone';

// Triple export pattern (lucide-react style)
export { PauseFillDuotone, PauseFillDuotone as PauseFillDuotoneIcon, PauseFillDuotone as SiPauseFillDuotone };
export default PauseFillDuotone;
export type { PauseFillDuotoneProps };
