import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleRightFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-right-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m.7 5.3a1 1 0 1 0-1.4 1.4l2.29 2.3H8a1 1 0 1 0 0 2h5.59l-2.3 2.3a1 1 0 1 0 1.42 1.4l4-4a1 1 0 0 0 0-1.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleRightFill.displayName = 'ArrowCircleRightFill';

// Triple export pattern (lucide-react style)
export { ArrowCircleRightFill, ArrowCircleRightFill as ArrowCircleRightFillIcon, ArrowCircleRightFill as SiArrowCircleRightFill };
export default ArrowCircleRightFill;
export type { ArrowCircleRightFillProps };
