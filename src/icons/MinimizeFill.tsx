import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinimizeFillProps = Omit<IconBaseProps, 'children'>;

const MinimizeFill = memo(
  forwardRef<SVGSVGElement, MinimizeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="minimize-fill" {...props}>
      <path d="M7.5 13.5a3 3 0 0 1 3 3V20a1.5 1.5 0 0 1-3 0v-3.5H4a1.5 1.5 0 0 1 0-3zM20 13.5a1.5 1.5 0 0 1 0 3h-3.5V20a1.5 1.5 0 0 1-3 0v-3.5a3 3 0 0 1 3-3zM9 2.5c.83 0 1.5.67 1.5 1.5v3.5a3 3 0 0 1-3 3H4a1.5 1.5 0 1 1 0-3h3.5V4c0-.83.67-1.5 1.5-1.5M15 2.5c.83 0 1.5.67 1.5 1.5v3.5H20a1.5 1.5 0 0 1 0 3h-3.5a3 3 0 0 1-3-3V4c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

MinimizeFill.displayName = 'MinimizeFill';

// Triple export pattern (lucide-react style)
export { MinimizeFill, MinimizeFill as MinimizeFillIcon, MinimizeFill as SiMinimizeFill };
export default MinimizeFill;
export type { MinimizeFillProps };
