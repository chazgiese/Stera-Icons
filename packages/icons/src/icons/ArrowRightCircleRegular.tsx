import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowRightCircleRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowRightCircleRegular = memo(
  forwardRef<SVGSVGElement, ArrowRightCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.47 7.47c.3-.3.77-.3 1.06 0l4 4q.22.22.22.53t-.22.53l-4 4c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l2.72-2.72H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.19l-2.72-2.72c-.3-.3-.3-.77 0-1.06" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowRightCircleRegular.displayName = 'ArrowRightCircleRegular';

// Triple export pattern
export { ArrowRightCircleRegular, ArrowRightCircleRegular as ArrowRightCircleRegularIcon, ArrowRightCircleRegular as SiArrowRightCircleRegular };
export default ArrowRightCircleRegular;
export type { ArrowRightCircleRegularProps };
