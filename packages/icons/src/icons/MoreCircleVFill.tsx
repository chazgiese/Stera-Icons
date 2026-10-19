import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleVFillProps = Omit<IconBaseProps, 'children'>;

const MoreCircleVFill = memo(
  forwardRef<SVGSVGElement, MoreCircleVFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M12 15c-.83 0-1.5.67-1.5 1.5S11.17 18 12 18s1.5-.67 1.5-1.5S12.83 15 12 15m0-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5M12 6c-.83 0-1.5.67-1.5 1.5S11.17 9 12 9s1.5-.67 1.5-1.5S12.83 6 12 6" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleVFill.displayName = 'MoreCircleVFill';

// Triple export pattern
export { MoreCircleVFill, MoreCircleVFill as MoreCircleVFillIcon, MoreCircleVFill as SiMoreCircleVFill };
export default MoreCircleVFill;
export type { MoreCircleVFillProps };
