import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScissorsBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScissorsBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScissorsBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scissors-bold-duotone" {...props}>
      <path d="M14.02 13.37a1 1 0 0 1 1.4-.15l6.2 5a1 1 0 0 1-1.25 1.56l-6.2-5a1 1 0 0 1-.15-1.4" opacity={0.4} />
        <path fillRule="evenodd" d="M5.5 3a3.5 3.5 0 0 1 3.24 4.83l1.73 1.4a1 1 0 0 1-1.26 1.55l-1.73-1.4Q6.62 10 5.5 10a3.5 3.5 0 1 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={0.4} />
        <path fillRule="evenodd" d="M20.37 4.22a1 1 0 0 1 1.26 1.56l-12.9 10.4A3.5 3.5 0 0 1 5.5 21a3.5 3.5 0 1 1 1.98-6.38zM5.5 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

ScissorsBoldDuotone.displayName = 'ScissorsBoldDuotone';

// Triple export pattern (lucide-react style)
export { ScissorsBoldDuotone, ScissorsBoldDuotone as ScissorsBoldDuotoneIcon, ScissorsBoldDuotone as SiScissorsBoldDuotone };
export default ScissorsBoldDuotone;
export type { ScissorsBoldDuotoneProps };
