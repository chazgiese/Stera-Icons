import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-down-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m4.7 7.8a1 1 0 0 0-1.4 0L12 13.08l-3.3-3.3a1 1 0 0 0-1.4 1.42l4 4a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0 0-1.42" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.3 9.8a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29z" />
    </IconBase>
  ))
);

ChevronCircleDownFillDuotone.displayName = 'ChevronCircleDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronCircleDownFillDuotone, ChevronCircleDownFillDuotone as ChevronCircleDownFillDuotoneIcon, ChevronCircleDownFillDuotone as SiChevronCircleDownFillDuotone };
export default ChevronCircleDownFillDuotone;
export type { ChevronCircleDownFillDuotoneProps };
