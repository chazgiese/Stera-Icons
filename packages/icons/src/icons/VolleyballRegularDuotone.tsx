import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const VolleyballRegularDuotone = memo(
  forwardRef<SVGSVGElement, VolleyballRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.78 11.73q.38-.01.81.04c.54 4.35 2.5 7.03 4.96 8.97q-.11 0-.22-.02-1.42-.11-2.67-.63c-1.8-2.01-3.15-4.65-3.57-8.3q.31-.04.69-.06M19.66 7.76q.67 1.21.94 2.6c-.84 2.65-2.86 5.25-6.4 7.38q-.22-.3-.4-.63-.2-.33-.35-.67c4.38-2.64 6.03-5.93 6.1-8.85zM6.42 5.26c1.46-.34 2.92-.27 4.24.03 1.84.4 3.48 1.26 4.59 2.12q-.2.35-.46.71-.16.24-.34.48l-.05.06c-.91-.73-2.38-1.53-4.06-1.91-1.96-.44-4.12-.3-6.05 1.1l.08-.13q.8-1.42 2.05-2.46" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1.75c1.8 0 3.5.46 4.97 1.28 1.68.93 3.07 2.32 4 4 .82 1.48 1.28 3.17 1.28 4.97 0 3.83-2.1 7.16-5.2 8.92-1.5.85-3.22 1.33-5.05 1.33q-.4 0-.79-.03c-5.18-.4-9.28-4.64-9.45-9.88L1.75 12c0-1.82.48-3.53 1.31-5.02C4.82 3.86 8.16 1.75 12 1.75m-6.22 9.98c-1.17.03-1.94.38-2.5.88.3 4.33 3.73 7.79 8.05 8.11q.33.03.67.03 1.47 0 2.8-.46c-1.03-.62-1.78-1.5-2.31-2.43-.73-1.28-1.09-2.69-1.27-3.77l-.01.01-.04-.33-.09-.71c-2.36-1-4.06-1.35-5.3-1.33m11.78-6.49c-.1 1.27-.71 2.54-1.53 3.73-.9 1.31-2.14 2.63-3.46 3.88.1.96.35 2.75 1.22 4.26.6 1.06 1.48 1.94 2.78 2.35 2.5-1.54 4.18-4.3 4.18-7.46 0-1.54-.4-2.98-1.1-4.24q-.8-1.45-2.1-2.52M12 3.25c-3.28 0-6.13 1.8-7.63 4.47q-.79 1.4-1.04 3.06 1-.5 2.42-.55c1.52-.03 3.43.4 5.88 1.43q1.3-1.22 2.33-2.44l.49-.62.34-.48Q16.4 5.81 16 4.21q-1.81-.95-3.99-.96" clipRule="evenodd" />
    </IconBase>
  ))
);

VolleyballRegularDuotone.displayName = 'VolleyballRegularDuotone';

// Triple export pattern
export { VolleyballRegularDuotone, VolleyballRegularDuotone as VolleyballRegularDuotoneIcon, VolleyballRegularDuotone as SiVolleyballRegularDuotone };
export default VolleyballRegularDuotone;
export type { VolleyballRegularDuotoneProps };
