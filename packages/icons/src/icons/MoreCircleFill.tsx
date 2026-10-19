import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleFillProps = Omit<IconBaseProps, 'children'>;

const MoreCircleFill = memo(
  forwardRef<SVGSVGElement, MoreCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M7.5 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S9 12.83 9 12s-.67-1.5-1.5-1.5m4.5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m4.5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S18 12.83 18 12s-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleFill.displayName = 'MoreCircleFill';

// Triple export pattern
export { MoreCircleFill, MoreCircleFill as MoreCircleFillIcon, MoreCircleFill as SiMoreCircleFill };
export default MoreCircleFill;
export type { MoreCircleFillProps };
