import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowRightBold = memo(
  forwardRef<SVGSVGElement, ArrowRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-right-bold" {...props}>
      <path fill="currentColor" d="M11.3 4.3a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 1 1-1.4-1.4l5.29-5.3H5a1 1 0 0 1 0-2h11.59l-5.3-5.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ArrowRightBold.displayName = 'ArrowRightBold';

// Triple export pattern (lucide-react style)
export { ArrowRightBold, ArrowRightBold as ArrowRightBoldIcon, ArrowRightBold as SiArrowRightBold };
export type { ArrowRightBoldProps };
