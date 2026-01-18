import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullCircleDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M8.52 9.25a1.25 1.25 0 0 0-.98 2.03l3.48 4.35c.5.63 1.46.63 1.96 0l3.48-4.35c.65-.82.07-2.03-.98-2.03z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.48 9.25c1.05 0 1.63 1.21.98 2.03l-3.48 4.35c-.5.63-1.46.63-1.96 0l-3.48-4.35a1.25 1.25 0 0 1 .98-2.03z" />
    </IconBase>
  ))
);

ChevronFullCircleDownFillDuotone.displayName = 'ChevronFullCircleDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleDownFillDuotone, ChevronFullCircleDownFillDuotone as ChevronFullCircleDownFillDuotoneIcon, ChevronFullCircleDownFillDuotone as SiChevronFullCircleDownFillDuotone };
export type { ChevronFullCircleDownFillDuotoneProps };
