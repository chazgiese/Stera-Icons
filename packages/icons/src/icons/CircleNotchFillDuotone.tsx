import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleNotchFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleNotchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.25c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25q-1.64 0-3.16.63-1.5.63-2.67 1.79Q5 7.32 4.37 8.84c-.4 1-.62 2.08-.62 3.16s.21 2.16.63 3.16q.63 1.5 1.79 2.67 1.15 1.16 2.67 1.8c1 .4 2.08.62 3.16.62s2.16-.21 3.16-.63q1.5-.62 2.67-1.79 1.16-1.16 1.8-2.67.61-1.52.62-3.16c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25c0 1.41-.28 2.81-.82 4.11s-1.33 2.5-2.33 3.5q-1.51 1.5-3.49 2.32c-1.3.54-2.7.82-4.11.82s-2.81-.28-4.11-.82-2.5-1.33-3.5-2.33q-1.5-1.51-2.32-3.49c-.54-1.3-.82-2.7-.82-4.11s.28-2.81.82-4.11 1.33-2.5 2.33-3.5Q5.9 2.9 7.89 2.08c1.3-.54 2.7-.82 4.11-.82" opacity={.4} />
        <path d="M12 1.25c1.41 0 2.81.28 4.11.82s2.5 1.33 3.5 2.33q1.5 1.51 2.32 3.49c.54 1.3.82 2.7.82 4.11 0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25q0-1.64-.63-3.16-.62-1.5-1.79-2.67-1.16-1.16-2.67-1.8-1.52-.61-3.16-.62c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

CircleNotchFillDuotone.displayName = 'CircleNotchFillDuotone';

// Triple export pattern
export { CircleNotchFillDuotone, CircleNotchFillDuotone as CircleNotchFillDuotoneIcon, CircleNotchFillDuotone as SiCircleNotchFillDuotone };
export default CircleNotchFillDuotone;
export type { CircleNotchFillDuotoneProps };
