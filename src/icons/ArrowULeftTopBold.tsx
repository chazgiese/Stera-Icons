import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftTopBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftTopBold = memo(
  forwardRef<SVGSVGElement, ArrowULeftTopBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-top-bold" {...props}>
      <path fill="currentColor" d="M7.3 3.3a1 1 0 1 1 1.4 1.4L6.42 7h7.09a6.5 6.5 0 1 1 0 13H9a1 1 0 0 1 0-2h4.5a4.5 4.5 0 1 0 0-9H6.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1-.06-1.33l.06-.08z" />
    </IconBase>
  ))
);

ArrowULeftTopBold.displayName = 'ArrowULeftTopBold';

// Triple export pattern (lucide-react style)
export { ArrowULeftTopBold, ArrowULeftTopBold as ArrowULeftTopBoldIcon, ArrowULeftTopBold as SiArrowULeftTopBold };
export default ArrowULeftTopBold;
export type { ArrowULeftTopBoldProps };
