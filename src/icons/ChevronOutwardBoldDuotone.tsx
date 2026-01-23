import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronOutwardBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronOutwardBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronOutwardBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-outward-bold-duotone" {...props}>
      <path fill="currentColor" d="M17.3 15.3a1 1 0 1 1 1.4 1.4l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 1 1 1.4-1.4l5.3 5.29z" opacity={.4} />
        <path fill="currentColor" d="M11.3 1.3a1 1 0 0 1 1.4 0l6 6a1 1 0 0 1-1.4 1.4L12 3.42l-5.3 5.3a1 1 0 0 1-1.4-1.42z" />
    </IconBase>
  ))
);

ChevronOutwardBoldDuotone.displayName = 'ChevronOutwardBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronOutwardBoldDuotone, ChevronOutwardBoldDuotone as ChevronOutwardBoldDuotoneIcon, ChevronOutwardBoldDuotone as SiChevronOutwardBoldDuotone };
export default ChevronOutwardBoldDuotone;
export type { ChevronOutwardBoldDuotoneProps };
