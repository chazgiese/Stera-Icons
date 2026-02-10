import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleRightBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleRightBold = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-right-bold" {...props}>
      <path fill="currentColor" d="M9.5 9.01c0-1.04 1.2-1.62 2.02-.99l3.84 3c.64.5.64 1.47 0 1.97l-3.84 2.99c-.82.63-2.02.05-2.02-1z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleRightBold.displayName = 'ChevronFullCircleRightBold';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleRightBold, ChevronFullCircleRightBold as ChevronFullCircleRightBoldIcon, ChevronFullCircleRightBold as SiChevronFullCircleRightBold };
export default ChevronFullCircleRightBold;
export type { ChevronFullCircleRightBoldProps };
