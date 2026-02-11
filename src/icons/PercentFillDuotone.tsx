import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PercentFillDuotone = memo(
  forwardRef<SVGSVGElement, PercentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="percent-fill-duotone" {...props}>
      <path d="M17.5 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M6.5 3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" opacity={0.4} />
        <path d="M19.3 3.3a1 1 0 1 1 1.4 1.4l-16 16a1 1 0 0 1-1.4-1.4z" />
    </IconBase>
  ))
);

PercentFillDuotone.displayName = 'PercentFillDuotone';

// Triple export pattern (lucide-react style)
export { PercentFillDuotone, PercentFillDuotone as PercentFillDuotoneIcon, PercentFillDuotone as SiPercentFillDuotone };
export default PercentFillDuotone;
export type { PercentFillDuotoneProps };
