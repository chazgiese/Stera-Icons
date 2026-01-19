import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowCircleLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-left-bold" {...props}>
      <path fill="currentColor" d="M18 12a1 1 0 0 1-1 1H9.41l3.3 3.3a1 1 0 1 1-1.42 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 1 1 1.42 1.4L9.4 11H17a1 1 0 0 1 1 1" />
        <path fill="currentColor" fillRule="evenodd" d="M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0m-2 0a9 9 0 1 0-18 0 9 9 0 0 0 18 0" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleLeftBold.displayName = 'ArrowCircleLeftBold';

// Triple export pattern (lucide-react style)
export { ArrowCircleLeftBold, ArrowCircleLeftBold as ArrowCircleLeftBoldIcon, ArrowCircleLeftBold as SiArrowCircleLeftBold };
export type { ArrowCircleLeftBoldProps };
