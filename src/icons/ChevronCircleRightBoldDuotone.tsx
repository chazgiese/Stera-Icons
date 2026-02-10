import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-right-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9.8 7.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ChevronCircleRightBoldDuotone.displayName = 'ChevronCircleRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronCircleRightBoldDuotone, ChevronCircleRightBoldDuotone as ChevronCircleRightBoldDuotoneIcon, ChevronCircleRightBoldDuotone as SiChevronCircleRightBoldDuotone };
export default ChevronCircleRightBoldDuotone;
export type { ChevronCircleRightBoldDuotoneProps };
