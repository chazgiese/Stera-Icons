import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleVRegularProps = Omit<IconBaseProps, 'children'>;

const MoreCircleVRegular = memo(
  forwardRef<SVGSVGElement, MoreCircleVRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 15c.83 0 1.5.67 1.5 1.5S12.83 18 12 18s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 6c.83 0 1.5.67 1.5 1.5S12.83 9 12 9s-1.5-.67-1.5-1.5S11.17 6 12 6" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleVRegular.displayName = 'MoreCircleVRegular';

// Triple export pattern
export { MoreCircleVRegular, MoreCircleVRegular as MoreCircleVRegularIcon, MoreCircleVRegular as SiMoreCircleVRegular };
export default MoreCircleVRegular;
export type { MoreCircleVRegularProps };
