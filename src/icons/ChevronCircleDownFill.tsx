import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleDownFillProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleDownFill = memo(
  forwardRef<SVGSVGElement, ChevronCircleDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-down-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m4.7 7.8a1 1 0 0 0-1.4 0L12 13.08l-3.3-3.3a1 1 0 1 0-1.4 1.42l4 4a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0 0-1.42" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleDownFill.displayName = 'ChevronCircleDownFill';

// Triple export pattern (lucide-react style)
export { ChevronCircleDownFill, ChevronCircleDownFill as ChevronCircleDownFillIcon, ChevronCircleDownFill as SiChevronCircleDownFill };
export default ChevronCircleDownFill;
export type { ChevronCircleDownFillProps };
