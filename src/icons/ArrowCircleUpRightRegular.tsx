import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleUpRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-right" {...props}>
      <path fill="currentColor" d="M7.93 16.07a.75.75 0 0 1 0-1.06l5.8-5.8H8.46a.75.75 0 1 1 0-1.5h7.08a.75.75 0 0 1 .75.75v7.08a.75.75 0 0 1-1.5 0v-5.26l-5.8 5.79c-.29.29-.76.29-1.06 0" />
        <path fill="currentColor" fillRule="evenodd" d="M4.4 19.6A10.75 10.75 0 1 1 19.6 4.4 10.75 10.75 0 0 1 4.4 19.6m1.06-1.06A9.25 9.25 0 1 0 18.54 5.46 9.25 9.25 0 0 0 5.46 18.54" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleUpRightRegular.displayName = 'ArrowCircleUpRightRegular';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpRightRegular, ArrowCircleUpRightRegular as ArrowCircleUpRightRegularIcon, ArrowCircleUpRightRegular as SiArrowCircleUpRightRegular };
export type { ArrowCircleUpRightRegularProps };
