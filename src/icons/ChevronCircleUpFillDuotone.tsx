import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-up-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 6.5a1 1 0 0 0-.7.3l-4 4a1 1 0 1 0 1.4 1.4l3.3-3.29 3.3 3.3a1 1 0 1 0 1.4-1.42l-4-4a1 1 0 0 0-.7-.29" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 8.5a1 1 0 0 1 .7.3l4 4a1 1 0 0 1-1.4 1.4L12 10.92l-3.3 3.3a1 1 0 1 1-1.4-1.42l4-4a1 1 0 0 1 .7-.29" />
    </IconBase>
  ))
);

ChevronCircleUpFillDuotone.displayName = 'ChevronCircleUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronCircleUpFillDuotone, ChevronCircleUpFillDuotone as ChevronCircleUpFillDuotoneIcon, ChevronCircleUpFillDuotone as SiChevronCircleUpFillDuotone };
export default ChevronCircleUpFillDuotone;
export type { ChevronCircleUpFillDuotoneProps };
