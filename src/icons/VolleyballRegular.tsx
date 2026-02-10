import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballRegularProps = Omit<IconBaseProps, 'children'>;

const VolleyballRegular = memo(
  forwardRef<SVGSVGElement, VolleyballRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="volleyball" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.7 9.7 0 0 1 8.53 5.03A9.75 9.75 0 1 1 12 2.25m-5.08 9.57c.52 4.08 2.37 6.6 4.67 8.42a8 8 0 0 0 2.97-.4 6.4 6.4 0 0 1-2.13-2.27 11 11 0 0 1-1.2-3.5v.01l-.06-.41-.08-.64c-1.74-.73-3.1-1.1-4.17-1.2m-1.5.03a3 3 0 0 0-1.65.75 8.3 8.3 0 0 0 4.92 6.96 13.7 13.7 0 0 1-3.27-7.71m14.71-1.24c-.82 2.46-2.72 4.87-5.99 6.84.54.7 1.24 1.27 2.19 1.58a8.2 8.2 0 0 0 3.8-8.42M17.3 5.68a7.6 7.6 0 0 1-1.45 3.47l-.36.5a26 26 0 0 1-2.91 3.17c.08.77.27 2.08.81 3.33 4.11-2.49 5.66-5.58 5.73-8.32a8 8 0 0 0-1.82-2.15M10.4 7.06A6.9 6.9 0 0 0 4.73 8.1a8 8 0 0 0-.89 2.68q.93-.46 2.23-.5c1.45-.02 3.26.38 5.57 1.36a25 25 0 0 0 2.5-2.7l.08-.1a10 10 0 0 0-3.8-1.78M12 3.75c-1.94 0-3.72.67-5.13 1.79a9 9 0 0 1 3.87.06c1.73.39 3.27 1.19 4.32 2q1-1.72.68-2.96A8 8 0 0 0 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

VolleyballRegular.displayName = 'VolleyballRegular';

// Triple export pattern (lucide-react style)
export { VolleyballRegular, VolleyballRegular as VolleyballRegularIcon, VolleyballRegular as SiVolleyballRegular };
export default VolleyballRegular;
export type { VolleyballRegularProps };
