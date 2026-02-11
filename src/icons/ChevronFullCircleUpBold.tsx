import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleUpBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleUpBold = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleUpBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-up-bold" {...props}>
      <path d="M11.01 8.64c.5-.64 1.48-.64 1.98 0l2.99 3.84c.63.82.05 2.02-1 2.02H9.02a1.25 1.25 0 0 1-.99-2.02z" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleUpBold.displayName = 'ChevronFullCircleUpBold';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleUpBold, ChevronFullCircleUpBold as ChevronFullCircleUpBoldIcon, ChevronFullCircleUpBold as SiChevronFullCircleUpBold };
export default ChevronFullCircleUpBold;
export type { ChevronFullCircleUpBoldProps };
