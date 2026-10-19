import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleBoldProps = Omit<IconBaseProps, 'children'>;

const MoreCircleBold = memo(
  forwardRef<SVGSVGElement, MoreCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S6 12.83 6 12s.67-1.5 1.5-1.5M12 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M16.5 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S15 12.83 15 12s.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleBold.displayName = 'MoreCircleBold';

// Triple export pattern
export { MoreCircleBold, MoreCircleBold as MoreCircleBoldIcon, MoreCircleBold as SiMoreCircleBold };
export default MoreCircleBold;
export type { MoreCircleBoldProps };
