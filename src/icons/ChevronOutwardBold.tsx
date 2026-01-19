import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronOutwardBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronOutwardBold = memo(
  forwardRef<SVGSVGElement, ChevronOutwardBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-outward-bold" {...props}>
      <path fill="currentColor" d="M17.3 15.3a1 1 0 1 1 1.4 1.4l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 1 1 1.4-1.4l5.3 5.29zM11.3 1.3a1 1 0 0 1 1.4 0l6 6a1 1 0 0 1-1.4 1.4L12 3.42l-5.3 5.3a1 1 0 0 1-1.4-1.42z" />
    </IconBase>
  ))
);

ChevronOutwardBold.displayName = 'ChevronOutwardBold';

// Triple export pattern (lucide-react style)
export { ChevronOutwardBold, ChevronOutwardBold as ChevronOutwardBoldIcon, ChevronOutwardBold as SiChevronOutwardBold };
export type { ChevronOutwardBoldProps };
