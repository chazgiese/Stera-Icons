import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-right-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M4.93 4.93a10 10 0 1 1 14.14 14.14A10 10 0 0 1 4.93 4.93m12.73 1.41A8 8 0 1 0 6.34 17.66 8 8 0 0 0 17.66 6.34" clipRule="evenodd" opacity={.4} />
        <path d="M14.83 8.17a1 1 0 0 1 1 1v5.66a1 1 0 0 1-1 1H9.17a1 1 0 1 1 0-2h3.24L8.46 9.88a1 1 0 0 1 1.42-1.42l3.95 3.95V9.17a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowCircleDownRightBoldDuotone.displayName = 'ArrowCircleDownRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownRightBoldDuotone, ArrowCircleDownRightBoldDuotone as ArrowCircleDownRightBoldDuotoneIcon, ArrowCircleDownRightBoldDuotone as SiArrowCircleDownRightBoldDuotone };
export default ArrowCircleDownRightBoldDuotone;
export type { ArrowCircleDownRightBoldDuotoneProps };
