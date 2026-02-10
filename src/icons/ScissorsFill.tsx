import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScissorsFillProps = Omit<IconBaseProps, 'children'>;

const ScissorsFill = memo(
  forwardRef<SVGSVGElement, ScissorsFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="scissors-fill" {...props}>
      <path fill="currentColor" d="M20.37 4.22a1 1 0 0 1 1.26 1.56l-12.9 10.4A3.5 3.5 0 0 1 5.5 21a3.5 3.5 0 1 1 1.98-6.38z" />
        <path fill="currentColor" d="M14.02 13.37a1 1 0 0 1 1.4-.15l6.2 5a1 1 0 0 1-1.25 1.56l-6.2-5a1 1 0 0 1-.15-1.4M5.5 3a3.5 3.5 0 0 1 3.24 4.83l1.73 1.4a1 1 0 0 1-1.26 1.55l-1.73-1.4Q6.62 10 5.5 10a3.5 3.5 0 1 1 0-7" />
    </IconBase>
  ))
);

ScissorsFill.displayName = 'ScissorsFill';

// Triple export pattern (lucide-react style)
export { ScissorsFill, ScissorsFill as ScissorsFillIcon, ScissorsFill as SiScissorsFill };
export default ScissorsFill;
export type { ScissorsFillProps };
