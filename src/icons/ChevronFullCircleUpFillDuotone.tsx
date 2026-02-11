import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-up-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m.99 6.64a1.25 1.25 0 0 0-1.98 0l-2.99 3.84c-.63.82-.05 2.02 1 2.02h5.97c1.04 0 1.62-1.2.99-2.02z" clipRule="evenodd" opacity={.4} />
        <path d="M11.01 8.64c.5-.64 1.48-.64 1.98 0l2.99 3.84c.63.82.05 2.02-1 2.02H9.02a1.25 1.25 0 0 1-.99-2.02z" />
    </IconBase>
  ))
);

ChevronFullCircleUpFillDuotone.displayName = 'ChevronFullCircleUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleUpFillDuotone, ChevronFullCircleUpFillDuotone as ChevronFullCircleUpFillDuotoneIcon, ChevronFullCircleUpFillDuotone as SiChevronFullCircleUpFillDuotone };
export default ChevronFullCircleUpFillDuotone;
export type { ChevronFullCircleUpFillDuotoneProps };
