import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightCircleBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightCircleBold = memo(
  forwardRef<SVGSVGElement, ArrowUpRightCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.83 8.17q.41 0 .7.3c.2.18.3.44.3.7v5.66c0 .55-.45 1-1 1s-1-.45-1-1v-3.24l-3.95 3.95c-.4.39-1.03.39-1.42 0-.39-.4-.39-1.03 0-1.42l3.95-3.95H9.17c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowUpRightCircleBold.displayName = 'ArrowUpRightCircleBold';

// Triple export pattern
export { ArrowUpRightCircleBold, ArrowUpRightCircleBold as ArrowUpRightCircleBoldIcon, ArrowUpRightCircleBold as SiArrowUpRightCircleBold };
export default ArrowUpRightCircleBold;
export type { ArrowUpRightCircleBoldProps };
