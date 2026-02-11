import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleLeftFillProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleLeftFill = memo(
  forwardRef<SVGSVGElement, ChevronCircleLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-left-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m2.2 5.3a1 1 0 0 0-1.4 0l-4 4a1 1 0 0 0 0 1.4l4 4a1 1 0 1 0 1.4-1.4L10.92 12l3.3-3.3a1 1 0 0 0 0-1.4" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleLeftFill.displayName = 'ChevronCircleLeftFill';

// Triple export pattern (lucide-react style)
export { ChevronCircleLeftFill, ChevronCircleLeftFill as ChevronCircleLeftFillIcon, ChevronCircleLeftFill as SiChevronCircleLeftFill };
export default ChevronCircleLeftFill;
export type { ChevronCircleLeftFillProps };
