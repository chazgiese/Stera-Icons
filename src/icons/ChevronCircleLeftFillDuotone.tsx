import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-left-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m2.2 5.8a1 1 0 0 0-1.4 0l-4.5 4.5a1 1 0 0 0 0 1.4l4.5 4.5a1 1 0 1 0 1.4-1.4L10.42 12l3.8-3.8a1 1 0 0 0 0-1.4" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.8 6.8a1 1 0 1 1 1.4 1.4L10.42 12l3.8 3.8a1 1 0 1 1-1.42 1.4l-4.5-4.5a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

ChevronCircleLeftFillDuotone.displayName = 'ChevronCircleLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronCircleLeftFillDuotone, ChevronCircleLeftFillDuotone as ChevronCircleLeftFillDuotoneIcon, ChevronCircleLeftFillDuotone as SiChevronCircleLeftFillDuotone };
export default ChevronCircleLeftFillDuotone;
export type { ChevronCircleLeftFillDuotoneProps };
