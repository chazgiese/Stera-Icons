import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-line-right-bold-duotone" {...props}>
      <path fill="currentColor" d="M21 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1" opacity={.4} />
        <path fill="currentColor" d="M10.7 4.3a1 1 0 1 0-1.4 1.4l5.29 5.3H3a1 1 0 0 0 0 2h11.59l-5.3 5.3a1 1 0 0 0 1.42 1.4l7-7a1 1 0 0 0 .19-.27l.06-.14.01-.05a1 1 0 0 0 0-.47l-.01-.06a1 1 0 0 0-.25-.42z" />
    </IconBase>
  ))
);

ArrowLineRightBoldDuotone.displayName = 'ArrowLineRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLineRightBoldDuotone, ArrowLineRightBoldDuotone as ArrowLineRightBoldDuotoneIcon, ArrowLineRightBoldDuotone as SiArrowLineRightBoldDuotone };
export default ArrowLineRightBoldDuotone;
export type { ArrowLineRightBoldDuotoneProps };
