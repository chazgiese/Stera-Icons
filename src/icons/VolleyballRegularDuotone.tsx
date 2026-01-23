import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const VolleyballRegularDuotone = memo(
  forwardRef<SVGSVGElement, VolleyballRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="volleyball-duotone" {...props}>
      <path d="M4.76 11.74a6 6 0 0 1 1.5-.02 14 14 0 0 0 2.2 6.26c.85 1.28 1.9 2.34 3.05 3.26a9 9 0 0 1-2.89-.63q-.76-.82-1.41-1.8a16 16 0 0 1-2.45-7.07M20 7.35q.74 1.28 1.06 2.77c-.86 2.83-3 5.63-6.8 7.91a7 7 0 0 1-.75-1.3c4.64-2.78 6.4-6.26 6.49-9.38M5.98 4.98a10 10 0 0 1 4.76.03 13 13 0 0 1 4.69 2.22q-.36.6-.85 1.24a11.35 11.35 0 0 0-4.2-2A7.7 7.7 0 0 0 3.87 7.6q.82-1.52 2.12-2.63" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5M5.37 11.68a4.5 4.5 0 0 0-2.17.62q-.23.15-.43.33a9.25 9.25 0 0 0 12.26 8.11 6 6 0 0 1-1.7-1.47A8 8 0 0 1 12 17.04a11 11 0 0 1-.39-1.1 14 14 0 0 1-.55-2.85c-2.54-1.08-4.37-1.45-5.7-1.4m12.45-6.87a7.4 7.4 0 0 1-1.2 3.34c-.97 1.6-2.45 3.2-4.06 4.72v.02a16 16 0 0 0 .48 2.57q.15.5.36 1.01.35.86.9 1.6a5 5 0 0 0 2.45 1.8l.07.03a9.24 9.24 0 0 0 1-15.1M12 2.75c-4.7 0-8.57 3.5-9.17 8.03a6 6 0 0 1 2.5-.6q.48 0 1.01.03c1.44.12 3.17.59 5.28 1.48a23 23 0 0 0 3.72-4.32q1.3-2.1.88-3.6A9 9 0 0 0 12 2.75" clipRule="evenodd" />
    </IconBase>
  ))
);

VolleyballRegularDuotone.displayName = 'VolleyballRegularDuotone';

// Triple export pattern (lucide-react style)
export { VolleyballRegularDuotone, VolleyballRegularDuotone as VolleyballRegularDuotoneIcon, VolleyballRegularDuotone as SiVolleyballRegularDuotone };
export default VolleyballRegularDuotone;
export type { VolleyballRegularDuotoneProps };
