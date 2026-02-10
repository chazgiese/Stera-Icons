import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleUpBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleUpBold = memo(
  forwardRef<SVGSVGElement, ChevronCircleUpBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-up-bold" {...props}>
      <path fill="currentColor" d="M12 8.5a1 1 0 0 1 .7.3l4 4a1 1 0 1 1-1.4 1.4L12 10.92l-3.3 3.3a1 1 0 1 1-1.4-1.42l4-4a1 1 0 0 1 .7-.29" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleUpBold.displayName = 'ChevronCircleUpBold';

// Triple export pattern (lucide-react style)
export { ChevronCircleUpBold, ChevronCircleUpBold as ChevronCircleUpBoldIcon, ChevronCircleUpBold as SiChevronCircleUpBold };
export default ChevronCircleUpBold;
export type { ChevronCircleUpBoldProps };
