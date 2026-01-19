import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCornerUpRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightBold = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-up-right-bold" {...props}>
      <path fill="currentColor" d="M3 21a1 1 0 0 1-1-1v-8a4 4 0 0 1 4-4h12.59l-3.3-3.3a1 1 0 1 1 1.42-1.4l5 5 .06.07.1.13v.01a1 1 0 0 1-.16 1.2l-5 5a1 1 0 1 1-1.42-1.42L18.6 10H6a2 2 0 0 0-2 2v8a1 1 0 0 1-1 1" />
    </IconBase>
  ))
);

ArrowCornerUpRightBold.displayName = 'ArrowCornerUpRightBold';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpRightBold, ArrowCornerUpRightBold as ArrowCornerUpRightBoldIcon, ArrowCornerUpRightBold as SiArrowCornerUpRightBold };
export default ArrowCornerUpRightBold;
export type { ArrowCornerUpRightBoldProps };
