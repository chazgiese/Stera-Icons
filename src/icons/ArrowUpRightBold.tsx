import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightBold = memo(
  forwardRef<SVGSVGElement, ArrowUpRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-right-bold" {...props}>
      <path d="M8 5a1 1 0 0 0 0 2h7.59L5.29 17.3a1 1 0 1 0 1.42 1.4L17 8.42V16a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1z" />
    </IconBase>
  ))
);

ArrowUpRightBold.displayName = 'ArrowUpRightBold';

// Triple export pattern (lucide-react style)
export { ArrowUpRightBold, ArrowUpRightBold as ArrowUpRightBoldIcon, ArrowUpRightBold as SiArrowUpRightBold };
export default ArrowUpRightBold;
export type { ArrowUpRightBoldProps };
