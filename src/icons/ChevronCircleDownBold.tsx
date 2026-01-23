import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleDownBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleDownBold = memo(
  forwardRef<SVGSVGElement, ChevronCircleDownBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-down-bold" {...props}>
      <path fill="currentColor" d="M15.8 9.8a1 1 0 1 1 1.4 1.4l-4.5 4.5a1 1 0 0 1-1.4 0l-4.5-4.5a1 1 0 1 1 1.4-1.4l3.8 3.79z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleDownBold.displayName = 'ChevronCircleDownBold';

// Triple export pattern (lucide-react style)
export { ChevronCircleDownBold, ChevronCircleDownBold as ChevronCircleDownBoldIcon, ChevronCircleDownBold as SiChevronCircleDownBold };
export default ChevronCircleDownBold;
export type { ChevronCircleDownBoldProps };
