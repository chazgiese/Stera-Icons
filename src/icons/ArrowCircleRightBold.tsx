import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleRightBold = memo(
  forwardRef<SVGSVGElement, ArrowCircleRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-right-bold" {...props}>
      <path fill="currentColor" d="M11.3 7.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l2.29-2.3H8a1 1 0 1 1 0-2h5.59l-2.3-2.3a1 1 0 0 1 0-1.4" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleRightBold.displayName = 'ArrowCircleRightBold';

// Triple export pattern (lucide-react style)
export { ArrowCircleRightBold, ArrowCircleRightBold as ArrowCircleRightBoldIcon, ArrowCircleRightBold as SiArrowCircleRightBold };
export default ArrowCircleRightBold;
export type { ArrowCircleRightBoldProps };
