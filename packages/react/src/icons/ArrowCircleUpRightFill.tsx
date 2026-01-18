import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleUpRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpRightFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.4 19.6A10.75 10.75 0 1 1 19.6 4.4 10.75 10.75 0 0 1 4.4 19.6m3.36-3.36a1 1 0 0 0 1.41 0l5.37-5.36v4.66a1 1 0 1 0 2 0V8.46a1 1 0 0 0-1-1H8.46a1 1 0 1 0 0 2h4.66l-5.36 5.37a1 1 0 0 0 0 1.41" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleUpRightFill.displayName = 'ArrowCircleUpRightFill';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpRightFill, ArrowCircleUpRightFill as ArrowCircleUpRightFillIcon, ArrowCircleUpRightFill as SiArrowCircleUpRightFill };
export type { ArrowCircleUpRightFillProps };
