import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleVBoldProps = Omit<IconBaseProps, 'children'>;

const MoreCircleVBold = memo(
  forwardRef<SVGSVGElement, MoreCircleVBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 15c.83 0 1.5.67 1.5 1.5S12.83 18 12 18s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 6c.83 0 1.5.67 1.5 1.5S12.83 9 12 9s-1.5-.67-1.5-1.5S11.17 6 12 6" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleVBold.displayName = 'MoreCircleVBold';

// Triple export pattern
export { MoreCircleVBold, MoreCircleVBold as MoreCircleVBoldIcon, MoreCircleVBold as SiMoreCircleVBold };
export default MoreCircleVBold;
export type { MoreCircleVBoldProps };
