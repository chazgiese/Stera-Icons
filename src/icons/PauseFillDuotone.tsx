import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PauseFillDuotone = memo(
  forwardRef<SVGSVGElement, PauseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pause-fill-duotone" {...props}>
      <path fill="currentColor" d="M17.75 2.5c1.24 0 2.25 1 2.25 2.25v14.5c0 1.24-1 2.25-2.25 2.25h-2.5c-1.24 0-2.25-1-2.25-2.25V4.75c0-1.24 1-2.25 2.25-2.25z" opacity={.4} />
        <path fill="currentColor" d="M8.75 2.5c1.24 0 2.25 1 2.25 2.25v14.5c0 1.24-1 2.25-2.25 2.25h-2.5c-1.24 0-2.25-1-2.25-2.25V4.75C4 3.51 5 2.5 6.25 2.5z" />
    </IconBase>
  ))
);

PauseFillDuotone.displayName = 'PauseFillDuotone';

// Triple export pattern (lucide-react style)
export { PauseFillDuotone, PauseFillDuotone as PauseFillDuotoneIcon, PauseFillDuotone as SiPauseFillDuotone };
export default PauseFillDuotone;
export type { PauseFillDuotoneProps };
