import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleRightBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleRightBold = memo(
  forwardRef<SVGSVGElement, ChevronCircleRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-right-bold" {...props}>
      <path d="M9.8 7.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 1 1-1.4-1.4l3.29-3.3-3.3-3.3a1 1 0 0 1 0-1.4" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleRightBold.displayName = 'ChevronCircleRightBold';

// Triple export pattern (lucide-react style)
export { ChevronCircleRightBold, ChevronCircleRightBold as ChevronCircleRightBoldIcon, ChevronCircleRightBold as SiChevronCircleRightBold };
export default ChevronCircleRightBold;
export type { ChevronCircleRightBoldProps };
