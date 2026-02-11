import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PercentBoldDuotone = memo(
  forwardRef<SVGSVGElement, PercentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="percent-bold-duotone" {...props}>
      <path d="M17.5 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M6.5 3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" opacity={0.4} />
        <path d="M19.3 3.3a1 1 0 1 1 1.4 1.4l-16 16a1 1 0 0 1-1.4-1.4z" />
    </IconBase>
  ))
);

PercentBoldDuotone.displayName = 'PercentBoldDuotone';

// Triple export pattern (lucide-react style)
export { PercentBoldDuotone, PercentBoldDuotone as PercentBoldDuotoneIcon, PercentBoldDuotone as SiPercentBoldDuotone };
export default PercentBoldDuotone;
export type { PercentBoldDuotoneProps };
