import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-up-right-fill-duotone" {...props}>
      <path fill="currentColor" d="M15 9H8a2 2 0 0 0-2 2v8a1 1 0 1 1-2 0v-8a4 4 0 0 1 4-4h7z" opacity={.4} />
        <path fill="currentColor" d="M15.62 3.08a1 1 0 0 1 1.09.21l4 4 .06.08a1 1 0 0 1-.06 1.34l-4 4A1 1 0 0 1 15 12V4a1 1 0 0 1 .62-.92" />
    </IconBase>
  ))
);

ArrowCornerUpRightFillDuotone.displayName = 'ArrowCornerUpRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpRightFillDuotone, ArrowCornerUpRightFillDuotone as ArrowCornerUpRightFillDuotoneIcon, ArrowCornerUpRightFillDuotone as SiArrowCornerUpRightFillDuotone };
export default ArrowCornerUpRightFillDuotone;
export type { ArrowCornerUpRightFillDuotoneProps };
