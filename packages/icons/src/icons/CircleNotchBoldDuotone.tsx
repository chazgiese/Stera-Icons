import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleNotchBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleNotchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.5c-.55 0-1 .45-1 1s.45 1 1 1q-1.7 0-3.25.65-1.56.64-2.76 1.84T4.15 8.75 3.5 12t.65 3.25q.64 1.56 1.84 2.76t2.76 1.84 3.25.65 3.25-.65q1.56-.64 2.76-1.84t1.84-2.76.65-3.25c0 .55.45 1 1 1s1-.45 1-1q0 2.09-.8 4.02c-.53 1.27-1.3 2.43-2.28 3.4q-1.48 1.48-3.4 2.28-1.93.8-4.02.8t-4.02-.8c-1.27-.53-2.43-1.3-3.4-2.28q-1.48-1.48-2.28-3.4-.8-1.93-.8-4.02t.8-4.02c.53-1.27 1.3-2.43 2.28-3.4.97-.98 2.13-1.75 3.4-2.28q1.94-.8 4.02-.8" opacity={.4} />
        <path d="M12 1.5q2.09 0 4.02.8c1.27.53 2.43 1.3 3.4 2.28.98.97 1.75 2.13 2.28 3.4q.8 1.94.8 4.02c0 .55-.45 1-1 1s-1-.45-1-1q0-1.7-.65-3.25-.64-1.56-1.84-2.76t-2.76-1.84T12 3.5c-.55 0-1-.45-1-1s.45-1 1-1" />
    </IconBase>
  ))
);

CircleNotchBoldDuotone.displayName = 'CircleNotchBoldDuotone';

// Triple export pattern
export { CircleNotchBoldDuotone, CircleNotchBoldDuotone as CircleNotchBoldDuotoneIcon, CircleNotchBoldDuotone as SiCircleNotchBoldDuotone };
export default CircleNotchBoldDuotone;
export type { CircleNotchBoldDuotoneProps };
