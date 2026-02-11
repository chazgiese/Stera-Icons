import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-left-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m2.5 7.01c0-1.04-1.2-1.62-2.02-.99l-3.84 3c-.64.5-.64 1.47 0 1.97l3.84 2.99c.82.63 2.02.05 2.02-1z" clipRule="evenodd" opacity={.4} />
        <path d="M12.48 8.02a1.25 1.25 0 0 1 2.02 1v5.97c0 1.04-1.2 1.62-2.02.99l-3.84-3a1.25 1.25 0 0 1 0-1.97z" />
    </IconBase>
  ))
);

ChevronFullCircleLeftFillDuotone.displayName = 'ChevronFullCircleLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleLeftFillDuotone, ChevronFullCircleLeftFillDuotone as ChevronFullCircleLeftFillDuotoneIcon, ChevronFullCircleLeftFillDuotone as SiChevronFullCircleLeftFillDuotone };
export default ChevronFullCircleLeftFillDuotone;
export type { ChevronFullCircleLeftFillDuotoneProps };
