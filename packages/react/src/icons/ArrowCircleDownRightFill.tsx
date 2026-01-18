import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleDownRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownRightFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.4 4.4a10.75 10.75 0 1 1 15.2 15.2A10.75 10.75 0 0 1 4.4 4.4m3.36 3.36a1 1 0 0 0 0 1.41l5.36 5.37H8.46a1 1 0 1 0 0 2h7.08a1 1 0 0 0 1-1V8.46a1 1 0 1 0-2 0v4.66L9.17 7.76a1 1 0 0 0-1.41 0" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleDownRightFill.displayName = 'ArrowCircleDownRightFill';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownRightFill, ArrowCircleDownRightFill as ArrowCircleDownRightFillIcon, ArrowCircleDownRightFill as SiArrowCircleDownRightFill };
export type { ArrowCircleDownRightFillProps };
