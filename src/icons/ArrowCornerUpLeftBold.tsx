import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-up-left-bold" {...props}>
      <path fill="currentColor" d="M7.3 3.3a1 1 0 1 1 1.4 1.4L6.42 7H16a4 4 0 0 1 4 4v8a1 1 0 0 1-2 0v-8a2 2 0 0 0-2-2H6.41l2.3 2.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1-.06-1.33l.06-.08z" />
    </IconBase>
  ))
);

ArrowCornerUpLeftBold.displayName = 'ArrowCornerUpLeftBold';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpLeftBold, ArrowCornerUpLeftBold as ArrowCornerUpLeftBoldIcon, ArrowCornerUpLeftBold as SiArrowCornerUpLeftBold };
export default ArrowCornerUpLeftBold;
export type { ArrowCornerUpLeftBoldProps };
