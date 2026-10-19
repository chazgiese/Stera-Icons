import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballFillProps = Omit<IconBaseProps, 'children'>;

const VolleyballFill = memo(
  forwardRef<SVGSVGElement, VolleyballFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.25 11.98c.59 4.73 2.8 7.69 5.52 9.78q.38.3.82.6c-4.4-.17-8.08-3.07-9.42-7.05q.21-.76.47-1.21c.23-.43.5-.77.9-1.2s.94-.77 1.7-.92M7 11.96c1.04.12 2.33.47 3.98 1.16.1 1.04.4 2.92 1.35 4.57.78 1.35 2 2.6 3.93 3.07q.5.13.98.19-1.18.7-2.55 1.07c-.97-.28-1.93-.94-2.86-1.65-2.36-1.81-4.26-4.31-4.82-8.41" />
        <path d="M20.8 6.5c1 1.59 1.57 3.48 1.57 5.5 0 2.75-1.07 5.26-2.82 7.11q-1.41.33-2.87-.04c-1.02-.26-1.77-.82-2.34-1.53 4.57-2.8 6.48-6.48 6.49-9.94q0-.56-.04-1.1" />
        <path d="M16.72 2.76q.84.44 1.6 1.02l.02.04c.56 1.12.74 2.4.74 3.78 0 2.73-1.49 5.88-5.62 8.42-.49-1.17-.67-2.4-.75-3.15 1.25-1.18 2.41-2.43 3.28-3.68 1.17-1.7 1.94-3.63 1.23-5.46q-.2-.53-.5-.97M4.6 8.25c1.83-1.39 3.9-1.54 5.77-1.12 1.52.34 2.84 1.04 3.7 1.7-.67.88-1.52 1.77-2.45 2.67-2.31-.97-4.14-1.38-5.6-1.35-1.7.04-2.88.64-3.74 1.54q-.35.37-.64.75L1.63 12l.01-.62.19-.26c1.12-1.6 1.7-2.06 2.77-2.87" />
        <path d="M12.56 1.86c1.51.59 2.57 1.33 3.03 2.5q.46 1.2-.53 3.01c-1.07-.8-2.6-1.57-4.3-1.95-2.24-.5-4.88-.34-7.22 1.43l-.93.74c1.65-3.51 5.22-5.95 9.36-5.96z" />
    </IconBase>
  ))
);

VolleyballFill.displayName = 'VolleyballFill';

// Triple export pattern
export { VolleyballFill, VolleyballFill as VolleyballFillIcon, VolleyballFill as SiVolleyballFill };
export default VolleyballFill;
export type { VolleyballFillProps };
