import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballFillProps = Omit<IconBaseProps, 'children'>;

const VolleyballFill = memo(
  forwardRef<SVGSVGElement, VolleyballFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="volleyball-fill" {...props}>
      <path fill="currentColor" d="M4.54 12.06c.66 5.2 3.08 8.46 6.08 10.76l.24.18a11 11 0 0 1-9.44-7.94q.15-.4.31-.7c.25-.46.56-.84 1-1.31.43-.46 1-.83 1.81-1M6.55 12.02c1.12.15 2.52.53 4.29 1.28.12 1.15.46 3.2 1.5 5.02a6.9 6.9 0 0 0 4.34 3.41l.39.09q-1.3.67-2.74.99c-.84-.37-1.68-.95-2.49-1.58a13.2 13.2 0 0 1-5.29-9.2M21.75 6.92a11 11 0 0 1-2.1 13.04 7 7 0 0 1-2.49-.17 4.6 4.6 0 0 1-2.53-1.64c5.01-3.1 7.12-7.15 7.12-10.98z" />
        <path fill="currentColor" d="M17.63 2.55q.87.52 1.61 1.18c.38 1.05.51 2.22.51 3.44 0 3-1.62 6.44-6.12 9.24a13 13 0 0 1-.81-3.4 27 27 0 0 0 3.6-4.06c1.29-1.87 2.14-4.02 1.36-6.06zM3.88 7.92a7.4 7.4 0 0 1 6.32-1.23 11 11 0 0 1 4.04 1.85q-1.14 1.43-2.67 2.9C9.04 10.36 7.03 9.91 5.4 9.94a5.6 5.6 0 0 0-4.4 2.02q0-.6.06-1.21c1.09-1.5 1.7-2 2.81-2.84" />
        <path fill="currentColor" d="M12 1q.51 0 1.02.05c1.44.62 2.44 1.4 2.9 2.57q.5 1.29-.57 3.25a13 13 0 0 0-4.71-2.13 9.4 9.4 0 0 0-7.97 1.58l-.15.12A11 11 0 0 1 12 1" />
    </IconBase>
  ))
);

VolleyballFill.displayName = 'VolleyballFill';

// Triple export pattern (lucide-react style)
export { VolleyballFill, VolleyballFill as VolleyballFillIcon, VolleyballFill as SiVolleyballFill };
export default VolleyballFill;
export type { VolleyballFillProps };
