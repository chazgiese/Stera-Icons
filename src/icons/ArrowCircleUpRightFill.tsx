import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpRightFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-right-fill" {...props}>
      <path fillRule="evenodd" d="M4.93 4.93a10 10 0 1 1 14.14 14.14A10 10 0 0 1 4.93 4.93m4.24 3.24a1 1 0 1 0 0 2h3.24l-3.95 3.95a1 1 0 0 0 1.42 1.42l3.95-3.95v3.24a1 1 0 0 0 2 0V9.17a1 1 0 0 0-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleUpRightFill.displayName = 'ArrowCircleUpRightFill';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpRightFill, ArrowCircleUpRightFill as ArrowCircleUpRightFillIcon, ArrowCircleUpRightFill as SiArrowCircleUpRightFill };
export default ArrowCircleUpRightFill;
export type { ArrowCircleUpRightFillProps };
