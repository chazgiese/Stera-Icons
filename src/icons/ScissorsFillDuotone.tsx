import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScissorsFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScissorsFillDuotone = memo(
  forwardRef<SVGSVGElement, ScissorsFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scissors-fill-duotone" {...props}>
      <path d="M14.02 13.37a1 1 0 0 1 1.4-.15l6.2 5a1 1 0 0 1-1.25 1.56l-6.2-5a1 1 0 0 1-.15-1.4M5.5 3a3.5 3.5 0 0 1 3.24 4.83l1.73 1.4a1 1 0 0 1-1.26 1.55l-1.73-1.4Q6.62 10 5.5 10a3.5 3.5 0 1 1 0-7" opacity={0.4} />
        <path d="M20.37 4.22a1 1 0 0 1 1.26 1.56l-12.9 10.4A3.5 3.5 0 0 1 5.5 21a3.5 3.5 0 1 1 1.98-6.38z" />
    </IconBase>
  ))
);

ScissorsFillDuotone.displayName = 'ScissorsFillDuotone';

// Triple export pattern (lucide-react style)
export { ScissorsFillDuotone, ScissorsFillDuotone as ScissorsFillDuotoneIcon, ScissorsFillDuotone as SiScissorsFillDuotone };
export default ScissorsFillDuotone;
export type { ScissorsFillDuotoneProps };
