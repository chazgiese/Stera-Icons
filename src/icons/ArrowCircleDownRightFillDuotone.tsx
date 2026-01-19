import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleDownRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-right-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.22 4.22a11 11 0 1 1 15.56 15.56A11 11 0 0 1 4.22 4.22m11.32 3.24a1 1 0 0 0-1 1v4.66L9.17 7.76a1 1 0 1 0-1.41 1.41l5.36 5.37H8.46a1 1 0 1 0 0 2h7.08a1 1 0 0 0 1-1V8.46a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7.76 7.76a1 1 0 0 1 1.41 0l5.37 5.36V8.46a1 1 0 1 1 2 0v7.08a1 1 0 0 1-1 1H8.46a1 1 0 1 1 0-2h4.66L7.76 9.17a1 1 0 0 1 0-1.41" />
    </IconBase>
  ))
);

ArrowCircleDownRightFillDuotone.displayName = 'ArrowCircleDownRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownRightFillDuotone, ArrowCircleDownRightFillDuotone as ArrowCircleDownRightFillDuotoneIcon, ArrowCircleDownRightFillDuotone as SiArrowCircleDownRightFillDuotone };
export default ArrowCircleDownRightFillDuotone;
export type { ArrowCircleDownRightFillDuotoneProps };
