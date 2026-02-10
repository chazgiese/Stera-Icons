import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleRightFillProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleRightFill = memo(
  forwardRef<SVGSVGElement, ChevronCircleRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-right-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-.8 5.3a1 1 0 1 0-1.4 1.4l3.29 3.3-3.3 3.3a1 1 0 1 0 1.42 1.4l4-4a1 1 0 0 0 0-1.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleRightFill.displayName = 'ChevronCircleRightFill';

// Triple export pattern (lucide-react style)
export { ChevronCircleRightFill, ChevronCircleRightFill as ChevronCircleRightFillIcon, ChevronCircleRightFill as SiChevronCircleRightFill };
export default ChevronCircleRightFill;
export type { ChevronCircleRightFillProps };
