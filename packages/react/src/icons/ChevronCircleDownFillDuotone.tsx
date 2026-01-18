import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronCircleDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m5.2 8.8a1 1 0 0 0-1.4 0L12 13.58l-3.8-3.8a1 1 0 0 0-1.4 1.42l4.5 4.5a1 1 0 0 0 1.4 0l4.5-4.5a1 1 0 0 0 0-1.42" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.8 9.8a1 1 0 0 1 1.4 1.4l-4.5 4.5a1 1 0 0 1-1.4 0l-4.5-4.5a1 1 0 1 1 1.4-1.4l3.8 3.79z" />
    </IconBase>
  ))
);

ChevronCircleDownFillDuotone.displayName = 'ChevronCircleDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronCircleDownFillDuotone, ChevronCircleDownFillDuotone as ChevronCircleDownFillDuotoneIcon, ChevronCircleDownFillDuotone as SiChevronCircleDownFillDuotone };
export type { ChevronCircleDownFillDuotoneProps };
