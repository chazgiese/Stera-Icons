import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleRegularProps = Omit<IconBaseProps, 'children'>;

const MoreCircleRegular = memo(
  forwardRef<SVGSVGElement, MoreCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S6 12.83 6 12s.67-1.5 1.5-1.5M12 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M16.5 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S15 12.83 15 12s.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleRegular.displayName = 'MoreCircleRegular';

// Triple export pattern
export { MoreCircleRegular, MoreCircleRegular as MoreCircleRegularIcon, MoreCircleRegular as SiMoreCircleRegular };
export default MoreCircleRegular;
export type { MoreCircleRegularProps };
