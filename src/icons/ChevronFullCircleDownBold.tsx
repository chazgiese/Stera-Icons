import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleDownBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleDownBold = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleDownBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-down-bold" {...props}>
      <path d="M14.99 9.5c1.04 0 1.62 1.2.99 2.02l-3 3.84c-.5.64-1.47.64-1.97 0l-2.99-3.84a1.25 1.25 0 0 1 1-2.02z" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleDownBold.displayName = 'ChevronFullCircleDownBold';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleDownBold, ChevronFullCircleDownBold as ChevronFullCircleDownBoldIcon, ChevronFullCircleDownBold as SiChevronFullCircleDownBold };
export default ChevronFullCircleDownBold;
export type { ChevronFullCircleDownBoldProps };
