import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowUpBold = memo(
  forwardRef<SVGSVGElement, ArrowUpBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-bold" {...props}>
      <path fill="currentColor" d="M4.3 12.7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1-1.4 1.4L13 7.42V19a1 1 0 0 1-2 0V7.41l-5.3 5.3a1 1 0 0 1-1.4 0" />
    </IconBase>
  ))
);

ArrowUpBold.displayName = 'ArrowUpBold';

// Triple export pattern (lucide-react style)
export { ArrowUpBold, ArrowUpBold as ArrowUpBoldIcon, ArrowUpBold as SiArrowUpBold };
export default ArrowUpBold;
export type { ArrowUpBoldProps };
