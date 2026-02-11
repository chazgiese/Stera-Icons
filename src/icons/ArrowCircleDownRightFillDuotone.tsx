import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-right-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M4.93 4.93a10 10 0 1 1 14.14 14.14A10 10 0 0 1 4.93 4.93m9.9 3.24a1 1 0 0 0-1 1v3.24L9.88 8.46a1 1 0 0 0-1.42 1.42l3.95 3.95H9.17a1 1 0 0 0 0 2h5.66a1 1 0 0 0 1-1V9.17a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path d="M14.83 8.17a1 1 0 0 1 1 1v5.66a1 1 0 0 1-1 1H9.17a1 1 0 1 1 0-2h3.24L8.46 9.88a1 1 0 0 1 1.42-1.42l3.95 3.95V9.17a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowCircleDownRightFillDuotone.displayName = 'ArrowCircleDownRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownRightFillDuotone, ArrowCircleDownRightFillDuotone as ArrowCircleDownRightFillDuotoneIcon, ArrowCircleDownRightFillDuotone as SiArrowCircleDownRightFillDuotone };
export default ArrowCircleDownRightFillDuotone;
export type { ArrowCircleDownRightFillDuotoneProps };
