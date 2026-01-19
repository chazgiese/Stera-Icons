import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MinimizeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MinimizeFillDuotone = memo(
  forwardRef<SVGSVGElement, MinimizeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="minimize-fill-duotone" {...props}>
      <path d="M7.5 13.5a3 3 0 0 1 3 3V20a1.5 1.5 0 0 1-3 0v-3.5H4a1.5 1.5 0 0 1 0-3zM15 2.5c.83 0 1.5.67 1.5 1.5v3.5H20a1.5 1.5 0 0 1 0 3h-3.5a3 3 0 0 1-3-3V4c0-.83.67-1.5 1.5-1.5" opacity={0.4} />
        <path fill="currentColor" d="M20 13.5a1.5 1.5 0 0 1 0 3h-3.5V20a1.5 1.5 0 0 1-3 0v-3.5a3 3 0 0 1 3-3zM9 2.5c.83 0 1.5.67 1.5 1.5v3.5a3 3 0 0 1-3 3H4a1.5 1.5 0 1 1 0-3h3.5V4c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

MinimizeFillDuotone.displayName = 'MinimizeFillDuotone';

// Triple export pattern (lucide-react style)
export { MinimizeFillDuotone, MinimizeFillDuotone as MinimizeFillDuotoneIcon, MinimizeFillDuotone as SiMinimizeFillDuotone };
export default MinimizeFillDuotone;
export type { MinimizeFillDuotoneProps };
