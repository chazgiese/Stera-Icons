import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-left-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m2.2 5.3a1 1 0 0 0-1.4 0l-4 4a1 1 0 0 0 0 1.4l4 4a1 1 0 1 0 1.4-1.4L10.92 12l3.3-3.3a1 1 0 0 0 0-1.4" clipRule="evenodd" opacity={.4} />
        <path d="M12.8 7.3a1 1 0 1 1 1.4 1.4L10.92 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

ChevronCircleLeftFillDuotone.displayName = 'ChevronCircleLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronCircleLeftFillDuotone, ChevronCircleLeftFillDuotone as ChevronCircleLeftFillDuotoneIcon, ChevronCircleLeftFillDuotone as SiChevronCircleLeftFillDuotone };
export default ChevronCircleLeftFillDuotone;
export type { ChevronCircleLeftFillDuotoneProps };
