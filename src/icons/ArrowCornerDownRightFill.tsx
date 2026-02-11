import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightFill = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-down-right-fill" {...props}>
      <path d="M5 4a1 1 0 0 1 1 1v8c0 1.1.9 2 2 2h7v-3a1 1 0 0 1 1.7-.7l4 4a1 1 0 0 1 .17 1.19l-.1.14-.06.08-4 4A1 1 0 0 1 15 20v-3H8a4 4 0 0 1-4-4V5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowCornerDownRightFill.displayName = 'ArrowCornerDownRightFill';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownRightFill, ArrowCornerDownRightFill as ArrowCornerDownRightFillIcon, ArrowCornerDownRightFill as SiArrowCornerDownRightFill };
export default ArrowCornerDownRightFill;
export type { ArrowCornerDownRightFillProps };
