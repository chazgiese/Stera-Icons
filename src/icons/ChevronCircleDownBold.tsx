import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleDownBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleDownBold = memo(
  forwardRef<SVGSVGElement, ChevronCircleDownBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-down-bold" {...props}>
      <path fill="currentColor" d="M15.3 9.8a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleDownBold.displayName = 'ChevronCircleDownBold';

// Triple export pattern (lucide-react style)
export { ChevronCircleDownBold, ChevronCircleDownBold as ChevronCircleDownBoldIcon, ChevronCircleDownBold as SiChevronCircleDownBold };
export default ChevronCircleDownBold;
export type { ChevronCircleDownBoldProps };
