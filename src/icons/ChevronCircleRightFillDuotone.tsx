import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-right-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m-.8 5.8a1 1 0 0 0-1.4 1.4l3.79 3.8-3.8 3.8a1 1 0 0 0 1.42 1.4l4.5-4.5a1 1 0 0 0 0-1.4z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9.8 6.8a1 1 0 0 1 1.4 0l4.5 4.5a1 1 0 0 1 0 1.4l-4.5 4.5a1 1 0 0 1-1.4-1.4l3.79-3.8-3.8-3.8a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ChevronCircleRightFillDuotone.displayName = 'ChevronCircleRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronCircleRightFillDuotone, ChevronCircleRightFillDuotone as ChevronCircleRightFillDuotoneIcon, ChevronCircleRightFillDuotone as SiChevronCircleRightFillDuotone };
export default ChevronCircleRightFillDuotone;
export type { ChevronCircleRightFillDuotoneProps };
