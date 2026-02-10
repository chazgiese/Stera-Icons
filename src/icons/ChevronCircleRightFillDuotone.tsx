import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-right-fill-duotone" {...props}>
      <path fill="currentColor" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-.8 5.3a1 1 0 0 0-1.4 1.4l3.29 3.3-3.3 3.3a1 1 0 0 0 1.42 1.4l4-4a1 1 0 0 0 0-1.4z" opacity={.4} />
        <path fill="currentColor" d="M9.8 7.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ChevronCircleRightFillDuotone.displayName = 'ChevronCircleRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronCircleRightFillDuotone, ChevronCircleRightFillDuotone as ChevronCircleRightFillDuotoneIcon, ChevronCircleRightFillDuotone as SiChevronCircleRightFillDuotone };
export default ChevronCircleRightFillDuotone;
export type { ChevronCircleRightFillDuotoneProps };
