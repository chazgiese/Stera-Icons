import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-right-bold-duotone" {...props}>
      <path d="m17.59 12-1 1H5a1 1 0 1 1 0-2h11.59z" opacity={.4} />
        <path d="M11.3 4.3a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4-1.4l6.29-6.3-6.3-6.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ArrowRightBoldDuotone.displayName = 'ArrowRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowRightBoldDuotone, ArrowRightBoldDuotone as ArrowRightBoldDuotoneIcon, ArrowRightBoldDuotone as SiArrowRightBoldDuotone };
export default ArrowRightBoldDuotone;
export type { ArrowRightBoldDuotoneProps };
