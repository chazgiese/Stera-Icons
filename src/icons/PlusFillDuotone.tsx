import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlusFillDuotone = memo(
  forwardRef<SVGSVGElement, PlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="plus-fill-duotone" {...props}>
      <path d="M10.5 13.5H4a1.5 1.5 0 0 1 0-3h6.5zM20 10.5a1.5 1.5 0 0 1 0 3h-6.5v-3z" opacity={0.4} />
        <path fill="currentColor" d="M12 2.5c.83 0 1.5.67 1.5 1.5v16a1.5 1.5 0 0 1-3 0V4c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

PlusFillDuotone.displayName = 'PlusFillDuotone';

// Triple export pattern (lucide-react style)
export { PlusFillDuotone, PlusFillDuotone as PlusFillDuotoneIcon, PlusFillDuotone as SiPlusFillDuotone };
export default PlusFillDuotone;
export type { PlusFillDuotoneProps };
