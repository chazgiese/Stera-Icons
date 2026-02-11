import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowLineRightBold = memo(
  forwardRef<SVGSVGElement, ArrowLineRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-line-right-bold" {...props}>
      <path d="M21 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1M10.7 4.3a1 1 0 1 0-1.4 1.4l5.29 5.3H3a1 1 0 1 0 0 2h11.59l-5.3 5.3a1 1 0 1 0 1.42 1.4l7-7a1 1 0 0 0 0-1.4z" />
    </IconBase>
  ))
);

ArrowLineRightBold.displayName = 'ArrowLineRightBold';

// Triple export pattern (lucide-react style)
export { ArrowLineRightBold, ArrowLineRightBold as ArrowLineRightBoldIcon, ArrowLineRightBold as SiArrowLineRightBold };
export default ArrowLineRightBold;
export type { ArrowLineRightBoldProps };
