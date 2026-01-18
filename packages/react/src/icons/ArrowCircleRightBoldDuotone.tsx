import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M1 12a11 11 0 1 1 22 0 11 11 0 0 1-22 0m2 0a9 9 0 1 0 18 0 9 9 0 0 0-18 0" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6 12a1 1 0 0 1 1-1h7.59l-3.3-3.3a1 1 0 1 1 1.42-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 1 1-1.42-1.4l3.3-3.3H7a1 1 0 0 1-1-1" />
    </IconBase>
  ))
);

ArrowCircleRightBoldDuotone.displayName = 'ArrowCircleRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleRightBoldDuotone, ArrowCircleRightBoldDuotone as ArrowCircleRightBoldDuotoneIcon, ArrowCircleRightBoldDuotone as SiArrowCircleRightBoldDuotone };
export type { ArrowCircleRightBoldDuotoneProps };
