import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullCircleLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-left-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m2.75 7.52a1.25 1.25 0 0 0-2.03-.98l-4.35 3.48c-.63.5-.63 1.46 0 1.96l4.35 3.48c.82.65 2.03.07 2.03-.98z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.72 7.54a1.25 1.25 0 0 1 2.03.98v6.96a1.25 1.25 0 0 1-2.03.98l-4.35-3.48a1.25 1.25 0 0 1 0-1.96z" />
    </IconBase>
  ))
);

ChevronFullCircleLeftFillDuotone.displayName = 'ChevronFullCircleLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleLeftFillDuotone, ChevronFullCircleLeftFillDuotone as ChevronFullCircleLeftFillDuotoneIcon, ChevronFullCircleLeftFillDuotone as SiChevronFullCircleLeftFillDuotone };
export default ChevronFullCircleLeftFillDuotone;
export type { ChevronFullCircleLeftFillDuotoneProps };
