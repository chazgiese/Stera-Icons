import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightBold = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-down-right-bold" {...props}>
      <path fill="currentColor" d="M5 4a1 1 0 0 1 1 1v8c0 1.1.9 2 2 2h9.59l-2.3-2.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 .16 1.19l-.1.14-.06.08-4 4a1 1 0 1 1-1.42-1.42L17.6 17H8a4 4 0 0 1-4-4V5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowCornerDownRightBold.displayName = 'ArrowCornerDownRightBold';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownRightBold, ArrowCornerDownRightBold as ArrowCornerDownRightBoldIcon, ArrowCornerDownRightBold as SiArrowCornerDownRightBold };
export default ArrowCornerDownRightBold;
export type { ArrowCornerDownRightBoldProps };
