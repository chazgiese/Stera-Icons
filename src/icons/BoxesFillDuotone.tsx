import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoxesFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoxesFillDuotone = memo(
  forwardRef<SVGSVGElement, BoxesFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="boxes-fill-duotone" {...props}>
      <path d="M6.83 16.25v3.59l-3.16-1.8v-3.6zM15.83 16.25v3.59l-3.16-1.8v-3.6zM11.33 8.53v3.6l-3.16-1.8v-3.6z" opacity={0.4} />
        <path fillRule="evenodd" d="M11.67 2.41c.2-.11.46-.11.67 0L16.84 5q.31.2.33.58v4.75l4.16 2.38q.34.2.34.59v5.14c0 .24-.12.46-.34.58l-4.5 2.58a.7.7 0 0 1-.66 0L12 19.2 7.83 21.6a.7.7 0 0 1-.66 0L2.67 19a.7.7 0 0 1-.34-.58v-5.14q0-.39.34-.6l4.16-2.37V5.57q0-.38.34-.58zm-8 15.63 3.16 1.8v-3.6l-3.16-1.8zm4.5-1.8v3.6l3.16-1.8v-3.6zm4.5 1.8 3.16 1.8v-3.6l-3.16-1.8zm4.5-1.8v3.6l3.16-1.8v-3.6zM4.36 13.3l3.14 1.79 3.14-1.8L7.5 11.5zm9 0 3.14 1.79 3.14-1.8-3.14-1.79zm-5.19-2.97 3.16 1.8V8.53l-3.16-1.8zm4.5-1.79v3.6l3.16-1.8v-3.6zM8.86 5.57 12 7.37l3.14-1.8L12 3.77z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoxesFillDuotone.displayName = 'BoxesFillDuotone';

// Triple export pattern (lucide-react style)
export { BoxesFillDuotone, BoxesFillDuotone as BoxesFillDuotoneIcon, BoxesFillDuotone as SiBoxesFillDuotone };
export default BoxesFillDuotone;
export type { BoxesFillDuotoneProps };
