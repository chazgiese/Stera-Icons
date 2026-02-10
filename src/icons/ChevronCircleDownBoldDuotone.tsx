import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-down-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.3 9.8a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29z" />
    </IconBase>
  ))
);

ChevronCircleDownBoldDuotone.displayName = 'ChevronCircleDownBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronCircleDownBoldDuotone, ChevronCircleDownBoldDuotone as ChevronCircleDownBoldDuotoneIcon, ChevronCircleDownBoldDuotone as SiChevronCircleDownBoldDuotone };
export default ChevronCircleDownBoldDuotone;
export type { ChevronCircleDownBoldDuotoneProps };
