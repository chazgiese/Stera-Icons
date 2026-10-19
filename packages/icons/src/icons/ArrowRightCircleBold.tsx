import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowRightCircleBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowRightCircleBold = memo(
  forwardRef<SVGSVGElement, ArrowRightCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.3 7.3c.38-.4 1.02-.4 1.4 0l4 4q.3.28.3.7t-.3.7l-4 4c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l2.29-2.3H8c-.55 0-1-.45-1-1s.45-1 1-1h5.59l-2.3-2.3c-.39-.38-.39-1.02 0-1.4" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowRightCircleBold.displayName = 'ArrowRightCircleBold';

// Triple export pattern
export { ArrowRightCircleBold, ArrowRightCircleBold as ArrowRightCircleBoldIcon, ArrowRightCircleBold as SiArrowRightCircleBold };
export default ArrowRightCircleBold;
export type { ArrowRightCircleBoldProps };
