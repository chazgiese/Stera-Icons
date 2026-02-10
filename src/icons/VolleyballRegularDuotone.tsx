import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const VolleyballRegularDuotone = memo(
  forwardRef<SVGSVGElement, VolleyballRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="volleyball-duotone" {...props}>
      <path d="M6.1 11.79q.39 0 .82.03c.52 4.08 2.37 6.6 4.67 8.42l-.22-.01a8 8 0 0 1-2.68-.68 13.7 13.7 0 0 1-3.27-7.7q.31-.06.68-.06M19.22 8q.66 1.21.91 2.6c-.82 2.47-2.72 4.87-5.99 6.85a6 6 0 0 1-.75-1.3c4.1-2.49 5.66-5.58 5.73-8.31zM6.87 5.54a9 9 0 0 1 3.87.06c1.73.39 3.27 1.19 4.32 2a10 10 0 0 1-.84 1.24 10 10 0 0 0-3.8-1.78 6.9 6.9 0 0 0-5.7 1.04l.08-.14a8 8 0 0 1 2.07-2.42" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.7 9.7 0 0 1 8.53 5.03A9.75 9.75 0 1 1 12 2.25m-5.9 9.54c-1.08.02-1.8.34-2.33.8a8.25 8.25 0 0 0 10.79 7.26 6.4 6.4 0 0 1-2.13-2.28 11 11 0 0 1-1.2-3.5v.01l-.06-.41-.08-.64c-2.22-.94-3.82-1.27-4.99-1.24m11.2-6.11a7.6 7.6 0 0 1-1.45 3.47l-.36.5a26 26 0 0 1-2.91 3.17c.09.91.34 2.59 1.15 4a4.6 4.6 0 0 0 2.6 2.2 8.24 8.24 0 0 0 .97-13.34M12 3.75a8.25 8.25 0 0 0-8.16 7.03q.93-.46 2.23-.5c1.45-.02 3.26.38 5.57 1.36a22 22 0 0 0 2.98-3.34q1.5-2.18 1.12-3.66A8 8 0 0 0 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

VolleyballRegularDuotone.displayName = 'VolleyballRegularDuotone';

// Triple export pattern (lucide-react style)
export { VolleyballRegularDuotone, VolleyballRegularDuotone as VolleyballRegularDuotoneIcon, VolleyballRegularDuotone as SiVolleyballRegularDuotone };
export default VolleyballRegularDuotone;
export type { VolleyballRegularDuotoneProps };
