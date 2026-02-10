import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-down-right-fill-duotone" {...props}>
      <path fill="currentColor" d="M5 4a1 1 0 0 1 1 1v8c0 1.1.9 2 2 2h7v2H8a4 4 0 0 1-4-4V5a1 1 0 0 1 1-1" opacity={.4} />
        <path fill="currentColor" d="M15.62 11.08a1 1 0 0 1 1.09.21l4 4a1 1 0 0 1 .06 1.34l-.06.08-4 4A1 1 0 0 1 15 20v-8a1 1 0 0 1 .62-.92" />
    </IconBase>
  ))
);

ArrowCornerDownRightFillDuotone.displayName = 'ArrowCornerDownRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownRightFillDuotone, ArrowCornerDownRightFillDuotone as ArrowCornerDownRightFillDuotoneIcon, ArrowCornerDownRightFillDuotone as SiArrowCornerDownRightFillDuotone };
export default ArrowCornerDownRightFillDuotone;
export type { ArrowCornerDownRightFillDuotoneProps };
