import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-right-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.22 4.22a11 11 0 1 1 15.56 15.56A11 11 0 0 1 4.22 4.22m4.24 3.24a1 1 0 0 0 0 2h4.66l-5.36 5.37a1 1 0 1 0 1.41 1.41l5.37-5.36v4.65a1 1 0 1 0 2 0V8.47a1 1 0 0 0-1-1z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7.76 16.24a1 1 0 0 1 0-1.41l5.36-5.37H8.46a1 1 0 1 1 0-2h7.08a1 1 0 0 1 1 1v7.08a1 1 0 1 1-2 0v-4.66l-5.37 5.36a1 1 0 0 1-1.41 0" />
    </IconBase>
  ))
);

ArrowCircleUpRightFillDuotone.displayName = 'ArrowCircleUpRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpRightFillDuotone, ArrowCircleUpRightFillDuotone as ArrowCircleUpRightFillDuotoneIcon, ArrowCircleUpRightFillDuotone as SiArrowCircleUpRightFillDuotone };
export default ArrowCircleUpRightFillDuotone;
export type { ArrowCircleUpRightFillDuotoneProps };
