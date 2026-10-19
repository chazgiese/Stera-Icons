import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreCircleVFillDuotone = memo(
  forwardRef<SVGSVGElement, MoreCircleVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M12 15c-.83 0-1.5.67-1.5 1.5S11.17 18 12 18s1.5-.67 1.5-1.5S12.83 15 12 15m0-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5M12 6c-.83 0-1.5.67-1.5 1.5S11.17 9 12 9s1.5-.67 1.5-1.5S12.83 6 12 6" clipRule="evenodd" opacity={.4} />
        <path d="M12 15c.83 0 1.5.67 1.5 1.5S12.83 18 12 18s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 6c.83 0 1.5.67 1.5 1.5S12.83 9 12 9s-1.5-.67-1.5-1.5S11.17 6 12 6" />
    </IconBase>
  ))
);

MoreCircleVFillDuotone.displayName = 'MoreCircleVFillDuotone';

// Triple export pattern
export { MoreCircleVFillDuotone, MoreCircleVFillDuotone as MoreCircleVFillDuotoneIcon, MoreCircleVFillDuotone as SiMoreCircleVFillDuotone };
export default MoreCircleVFillDuotone;
export type { MoreCircleVFillDuotoneProps };
