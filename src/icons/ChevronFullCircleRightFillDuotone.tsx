import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-right-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-.48 6.02a1.25 1.25 0 0 0-2.02 1v5.97c0 1.04 1.2 1.62 2.02.99l3.84-3c.64-.5.64-1.47 0-1.97z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9.5 9.01c0-1.04 1.2-1.62 2.02-.99l3.84 3c.64.5.64 1.47 0 1.97l-3.84 2.99c-.82.63-2.02.05-2.02-1z" />
    </IconBase>
  ))
);

ChevronFullCircleRightFillDuotone.displayName = 'ChevronFullCircleRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleRightFillDuotone, ChevronFullCircleRightFillDuotone as ChevronFullCircleRightFillDuotoneIcon, ChevronFullCircleRightFillDuotone as SiChevronFullCircleRightFillDuotone };
export default ChevronFullCircleRightFillDuotone;
export type { ChevronFullCircleRightFillDuotoneProps };
