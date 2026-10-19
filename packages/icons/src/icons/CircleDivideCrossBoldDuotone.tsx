import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideCrossBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.5q.5 0 1 .06V11h7.44q.06.5.06 1t-.06 1H13v7.44q-.5.06-1 .06t-1-.06V13H3.56q-.06-.5-.06-1t.06-1H11V3.56q.5-.06 1-.06" opacity={.4} />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideCrossBoldDuotone.displayName = 'CircleDivideCrossBoldDuotone';

// Triple export pattern
export { CircleDivideCrossBoldDuotone, CircleDivideCrossBoldDuotone as CircleDivideCrossBoldDuotoneIcon, CircleDivideCrossBoldDuotone as SiCircleDivideCrossBoldDuotone };
export default CircleDivideCrossBoldDuotone;
export type { CircleDivideCrossBoldDuotoneProps };
