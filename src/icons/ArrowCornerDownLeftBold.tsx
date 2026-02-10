import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-down-left-bold" {...props}>
      <path fill="currentColor" d="M19 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H6.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4-.06-.07-.1-.13v-.01a1 1 0 0 1 .16-1.2l4-4a1 1 0 1 1 1.42 1.42L6.4 15H16a2 2 0 0 0 2-2V5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowCornerDownLeftBold.displayName = 'ArrowCornerDownLeftBold';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownLeftBold, ArrowCornerDownLeftBold as ArrowCornerDownLeftBoldIcon, ArrowCornerDownLeftBold as SiArrowCornerDownLeftBold };
export default ArrowCornerDownLeftBold;
export type { ArrowCornerDownLeftBoldProps };
