import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M22.75 12a10.75 10.75 0 1 1-21.5 0 10.75 10.75 0 0 1 21.5 0M18 12a1 1 0 0 0-1-1H9.41l3.3-3.3a1 1 0 1 0-1.42-1.4l-5 5a1 1 0 0 0 0 1.4l5 5a1 1 0 1 0 1.42-1.4L9.4 13H17a1 1 0 0 0 1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleLeftFill.displayName = 'ArrowCircleLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowCircleLeftFill, ArrowCircleLeftFill as ArrowCircleLeftFillIcon, ArrowCircleLeftFill as SiArrowCircleLeftFill };
export type { ArrowCircleLeftFillProps };
