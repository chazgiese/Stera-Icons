import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-down-right-bold-duotone" {...props}>
      <path d="M5 4a1 1 0 0 1 1 1v8c0 1.1.9 2 2 2h9.59l1 1-1 1H8a4 4 0 0 1-4-4V5a1 1 0 0 1 1-1" opacity={.4} />
        <path d="M15.3 11.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 .07 1.33l-.06.08-4 4a1 1 0 1 1-1.42-1.42L18.6 16l-3.3-3.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ArrowCornerDownRightBoldDuotone.displayName = 'ArrowCornerDownRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownRightBoldDuotone, ArrowCornerDownRightBoldDuotone as ArrowCornerDownRightBoldDuotoneIcon, ArrowCornerDownRightBoldDuotone as SiArrowCornerDownRightBoldDuotone };
export default ArrowCornerDownRightBoldDuotone;
export type { ArrowCornerDownRightBoldDuotoneProps };
