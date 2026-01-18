import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="m17.59 12-1 1H5a1 1 0 1 1 0-2h11.59z" opacity={.4} />
        <path fill="currentColor" d="M11.3 4.3a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 1 1-1.4-1.4l6.29-6.3-6.3-6.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ArrowRightBoldDuotone.displayName = 'ArrowRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowRightBoldDuotone, ArrowRightBoldDuotone as ArrowRightBoldDuotoneIcon, ArrowRightBoldDuotone as SiArrowRightBoldDuotone };
export type { ArrowRightBoldDuotoneProps };
