import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballRegularProps = Omit<IconBaseProps, 'children'>;

const VolleyballRegular = memo(
  forwardRef<SVGSVGElement, VolleyballRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c1.8 0 3.5.46 4.97 1.28 1.68.93 3.07 2.32 4 4 .82 1.48 1.28 3.17 1.28 4.97 0 3.83-2.1 7.16-5.2 8.92-1.5.85-3.22 1.33-5.05 1.33q-.4 0-.79-.03c-5.18-.4-9.28-4.64-9.45-9.88L1.75 12c0-1.82.48-3.53 1.31-5.02C4.82 3.86 8.16 1.75 12 1.75M6.6 11.77c.53 4.35 2.5 7.03 4.95 8.97l.45.01q1.47 0 2.8-.46c-1.03-.62-1.78-1.5-2.31-2.43-.73-1.27-1.09-2.68-1.27-3.76v.01l-.05-.33-.09-.72c-1.88-.8-3.34-1.18-4.49-1.3m-1.51.02c-.8.12-1.37.43-1.82.82.24 3.38 2.4 6.24 5.39 7.48-1.8-2.01-3.15-4.65-3.57-8.3m15.5-1.43c-.83 2.65-2.85 5.25-6.39 7.38.57.77 1.34 1.4 2.37 1.72 2.5-1.54 4.18-4.3 4.18-7.46q0-.83-.15-1.64m-3.03-5.12c-.1 1.27-.71 2.54-1.53 3.73-.9 1.31-2.14 2.63-3.46 3.88.08.82.28 2.25.88 3.59 4.38-2.64 6.03-5.93 6.1-8.85q-.79-1.36-2-2.35m-7.23 1.5c-1.95-.43-4.12-.28-6.04 1.12q-.72 1.36-.96 2.92 1-.5 2.42-.55c1.52-.03 3.43.4 5.88 1.43q1.3-1.22 2.33-2.44l.44-.56c-.92-.73-2.38-1.53-4.07-1.91M12 3.26c-2.12 0-4.06.75-5.58 2 1.46-.33 2.92-.26 4.24.04 1.84.4 3.48 1.26 4.59 2.12q1.09-1.85.73-3.2-1.81-.95-3.98-.96" clipRule="evenodd" />
    </IconBase>
  ))
);

VolleyballRegular.displayName = 'VolleyballRegular';

// Triple export pattern
export { VolleyballRegular, VolleyballRegular as VolleyballRegularIcon, VolleyballRegular as SiVolleyballRegular };
export default VolleyballRegular;
export type { VolleyballRegularProps };
