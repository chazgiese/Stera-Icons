import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowULeftTopBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftTopBold = memo(
  forwardRef<SVGSVGElement, ArrowULeftTopBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5.3 2.3a1 1 0 1 1 1.4 1.4L4.42 6H15.5a7.5 7.5 0 0 1 0 15H8a1 1 0 0 1 0-2h7.5a5.5 5.5 0 0 0 0-11H4.41l2.3 2.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1-.16-1.19V6.5l.16-.2z" />
    </IconBase>
  ))
);

ArrowULeftTopBold.displayName = 'ArrowULeftTopBold';

// Triple export pattern (lucide-react style)
export { ArrowULeftTopBold, ArrowULeftTopBold as ArrowULeftTopBoldIcon, ArrowULeftTopBold as SiArrowULeftTopBold };
export type { ArrowULeftTopBoldProps };
