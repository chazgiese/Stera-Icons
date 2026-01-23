import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowsUpDownBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowsUpDownBold = memo(
  forwardRef<SVGSVGElement, ArrowsUpDownBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrows-up-down-bold" {...props}>
      <path fill="currentColor" d="M17 3a1 1 0 0 1 1 1v15.59l2.3-2.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.33.07l-.08-.07-4-4a1 1 0 1 1 1.42-1.42L16 19.6V4a1 1 0 0 1 1-1M7 2a1 1 0 0 1 .7.3l4 4a1 1 0 1 1-1.4 1.4L8 5.42V21a1 1 0 0 1-2 0V5.41l-2.3 2.3a1 1 0 1 1-1.4-1.42l4-4 .07-.06A1 1 0 0 1 7 2" />
    </IconBase>
  ))
);

ArrowsUpDownBold.displayName = 'ArrowsUpDownBold';

// Triple export pattern (lucide-react style)
export { ArrowsUpDownBold, ArrowsUpDownBold as ArrowsUpDownBoldIcon, ArrowsUpDownBold as SiArrowsUpDownBold };
export default ArrowsUpDownBold;
export type { ArrowsUpDownBoldProps };
