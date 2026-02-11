import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballFillProps = Omit<IconBaseProps, 'children'>;

const VolleyballFill = memo(
  forwardRef<SVGSVGElement, VolleyballFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="volleyball-fill" {...props}>
      <path d="M5.22 12.02c.6 4.72 2.8 7.67 5.53 9.77l.2.15a10 10 0 0 1-8.57-7.2 5 5 0 0 1 1.2-1.82c.39-.4.9-.74 1.64-.9M7.05 12c1.01.12 2.28.47 3.9 1.15.1 1.04.41 2.9 1.35 4.55a6.2 6.2 0 0 0 3.95 3.1l.35.07q-1.15.6-2.49.9c-.76-.33-1.52-.86-2.26-1.43A12 12 0 0 1 7.05 12M20.86 7.36a9.95 9.95 0 0 1-1.91 11.83 6 6 0 0 1-2.26-.16 4.2 4.2 0 0 1-2.3-1.48c4.56-2.81 6.47-6.48 6.47-9.95z" />
        <path d="M17.12 3.4q.78.48 1.47 1.08c.34.95.46 2 .46 3.12 0 2.7-1.47 5.84-5.57 8.37a11 11 0 0 1-.74-3.09 24 24 0 0 0 3.27-3.67c1.18-1.7 1.96-3.65 1.24-5.5zM4.62 8.27a6.8 6.8 0 0 1 5.75-1.1c1.49.33 2.8 1.02 3.66 1.66q-1.02 1.3-2.42 2.63c-2.3-.96-4.13-1.37-5.6-1.34a5 5 0 0 0-4 1.83q0-.56.06-1.1a10 10 0 0 1 2.55-2.58" />
        <path d="M12 2q.47 0 .92.04c1.31.57 2.23 1.27 2.64 2.33q.46 1.18-.51 2.96c-1.08-.8-2.6-1.56-4.29-1.94a8.6 8.6 0 0 0-7.24 1.43l-.14.11A10 10 0 0 1 12 2" />
    </IconBase>
  ))
);

VolleyballFill.displayName = 'VolleyballFill';

// Triple export pattern (lucide-react style)
export { VolleyballFill, VolleyballFill as VolleyballFillIcon, VolleyballFill as SiVolleyballFill };
export default VolleyballFill;
export type { VolleyballFillProps };
