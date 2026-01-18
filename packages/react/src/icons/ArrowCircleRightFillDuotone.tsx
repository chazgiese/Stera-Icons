import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m.7 5.3a1 1 0 1 0-1.4 1.4l3.29 3.3H7a1 1 0 0 0 0 2h7.59l-3.3 3.3a1 1 0 1 0 1.42 1.4l5-5a1 1 0 0 0 0-1.4z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6 12a1 1 0 0 1 1-1h7.59l-3.3-3.3a1 1 0 1 1 1.42-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 1 1-1.42-1.4l3.3-3.3H7a1 1 0 0 1-1-1" />
    </IconBase>
  ))
);

ArrowCircleRightFillDuotone.displayName = 'ArrowCircleRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleRightFillDuotone, ArrowCircleRightFillDuotone as ArrowCircleRightFillDuotoneIcon, ArrowCircleRightFillDuotone as SiArrowCircleRightFillDuotone };
export type { ArrowCircleRightFillDuotoneProps };
