import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullCircleRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m-.72 6.54a1.25 1.25 0 0 0-2.03.98v6.96a1.25 1.25 0 0 0 2.03.98l4.35-3.48c.63-.5.63-1.46 0-1.96z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9.25 8.52a1.25 1.25 0 0 1 2.03-.98l4.35 3.48c.63.5.63 1.46 0 1.96l-4.35 3.48c-.82.65-2.03.07-2.03-.98z" />
    </IconBase>
  ))
);

ChevronFullCircleRightFillDuotone.displayName = 'ChevronFullCircleRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleRightFillDuotone, ChevronFullCircleRightFillDuotone as ChevronFullCircleRightFillDuotoneIcon, ChevronFullCircleRightFillDuotone as SiChevronFullCircleRightFillDuotone };
export type { ChevronFullCircleRightFillDuotoneProps };
