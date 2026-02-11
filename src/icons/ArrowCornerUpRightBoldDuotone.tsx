import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-up-right-bold-duotone" {...props}>
      <path d="m18.59 8-1 1H8a2 2 0 0 0-2 2v8a1 1 0 1 1-2 0v-8a4 4 0 0 1 4-4h9.59z" opacity={.4} />
        <path d="M15.3 3.3a1 1 0 0 1 1.4 0l4 4 .07.07a1 1 0 0 1-.06 1.34l-4 4a1 1 0 1 1-1.42-1.42L18.6 8l-3.3-3.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ArrowCornerUpRightBoldDuotone.displayName = 'ArrowCornerUpRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpRightBoldDuotone, ArrowCornerUpRightBoldDuotone as ArrowCornerUpRightBoldDuotoneIcon, ArrowCornerUpRightBoldDuotone as SiArrowCornerUpRightBoldDuotone };
export default ArrowCornerUpRightBoldDuotone;
export type { ArrowCornerUpRightBoldDuotoneProps };
