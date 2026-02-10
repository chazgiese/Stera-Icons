import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-down-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M9.01 9.5a1.25 1.25 0 0 0-.99 2.02l3 3.84c.5.64 1.47.64 1.97 0l2.99-3.84c.63-.82.05-2.02-1-2.02z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M14.99 9.5c1.04 0 1.62 1.2.99 2.02l-3 3.84c-.5.64-1.47.64-1.97 0l-2.99-3.84a1.25 1.25 0 0 1 1-2.02z" />
    </IconBase>
  ))
);

ChevronFullCircleDownFillDuotone.displayName = 'ChevronFullCircleDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleDownFillDuotone, ChevronFullCircleDownFillDuotone as ChevronFullCircleDownFillDuotoneIcon, ChevronFullCircleDownFillDuotone as SiChevronFullCircleDownFillDuotone };
export default ChevronFullCircleDownFillDuotone;
export type { ChevronFullCircleDownFillDuotoneProps };
