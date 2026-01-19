import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleUpRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpRightBold = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-right-bold" {...props}>
      <path fill="currentColor" d="M7.76 16.24a1 1 0 0 1 0-1.41l5.36-5.37H8.46a1 1 0 1 1 0-2h7.08a1 1 0 0 1 1 1v7.08a1 1 0 1 1-2 0v-4.66l-5.37 5.36a1 1 0 0 1-1.41 0" />
        <path fill="currentColor" fillRule="evenodd" d="M4.22 19.78A11 11 0 1 1 19.78 4.22 11 11 0 0 1 4.22 19.78m1.42-1.42A9 9 0 1 0 18.36 5.64 9 9 0 0 0 5.64 18.36" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleUpRightBold.displayName = 'ArrowCircleUpRightBold';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpRightBold, ArrowCircleUpRightBold as ArrowCircleUpRightBoldIcon, ArrowCircleUpRightBold as SiArrowCircleUpRightBold };
export type { ArrowCircleUpRightBoldProps };
