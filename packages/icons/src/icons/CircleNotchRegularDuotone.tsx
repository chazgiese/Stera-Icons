import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleNotchRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleNotchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.75q2.04 0 3.92.78 1.89.79 3.33 2.22 1.43 1.44 2.22 3.33.77 1.88.78 3.92c0 .41-.34.75-.75.75s-.75-.34-.75-.75q0-1.74-.67-3.35-.67-1.6-1.9-2.84-1.22-1.22-2.83-1.9-1.6-.65-3.35-.66c-.41 0-.75-.34-.75-.75s.34-.75.75-.75" />
        <path d="M12 1.75c-.41 0-.75.34-.75.75s.34.75.75.75q-1.74 0-3.35.67-1.6.66-2.84 1.9c-.81.8-1.45 1.77-1.9 2.83q-.65 1.6-.66 3.35 0 1.74.67 3.35.66 1.6 1.9 2.84c.8.81 1.77 1.45 2.83 1.9q1.6.65 3.35.66 1.74 0 3.35-.67 1.6-.67 2.84-1.9 1.22-1.22 1.9-2.83.65-1.6.66-3.35c0 .41.34.75.75.75s.75-.34.75-.75q0 2.04-.78 3.92-.79 1.89-2.22 3.33-1.44 1.43-3.33 2.22-1.88.77-3.92.78-2.04 0-3.92-.78-1.89-.79-3.33-2.22-1.43-1.44-2.22-3.33-.77-1.88-.78-3.92 0-2.04.78-3.92.79-1.89 2.22-3.33Q6.2 3.32 8.08 2.53q1.88-.77 3.92-.78" opacity={.4} />
    </IconBase>
  ))
);

CircleNotchRegularDuotone.displayName = 'CircleNotchRegularDuotone';

// Triple export pattern
export { CircleNotchRegularDuotone, CircleNotchRegularDuotone as CircleNotchRegularDuotoneIcon, CircleNotchRegularDuotone as SiCircleNotchRegularDuotone };
export default CircleNotchRegularDuotone;
export type { CircleNotchRegularDuotoneProps };
