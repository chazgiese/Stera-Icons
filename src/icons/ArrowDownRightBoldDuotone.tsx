import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-down-right-bold-duotone" {...props}>
      <path d="M5.3 5.3a1 1 0 0 1 1.4 0L17 15.58V17h-1.41L5.29 6.7a1 1 0 0 1 0-1.4" opacity={.4} />
        <path d="M18 7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h9V8a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowDownRightBoldDuotone.displayName = 'ArrowDownRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowDownRightBoldDuotone, ArrowDownRightBoldDuotone as ArrowDownRightBoldDuotoneIcon, ArrowDownRightBoldDuotone as SiArrowDownRightBoldDuotone };
export default ArrowDownRightBoldDuotone;
export type { ArrowDownRightBoldDuotoneProps };
