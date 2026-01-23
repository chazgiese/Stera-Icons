import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-up-fill-duotone" {...props}>
      <path fill="currentColor" d="M11.02 8.37c.5-.63 1.46-.63 1.96 0l3.48 4.35c.65.82.07 2.03-.98 2.03H8.52a1.25 1.25 0 0 1-.98-2.03z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m.98 7.37a1.25 1.25 0 0 0-1.96 0l-3.48 4.35c-.65.82-.07 2.03.98 2.03h6.96c1.05 0 1.63-1.21.98-2.03z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

ChevronFullCircleUpFillDuotone.displayName = 'ChevronFullCircleUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleUpFillDuotone, ChevronFullCircleUpFillDuotone as ChevronFullCircleUpFillDuotoneIcon, ChevronFullCircleUpFillDuotone as SiChevronFullCircleUpFillDuotone };
export default ChevronFullCircleUpFillDuotone;
export type { ChevronFullCircleUpFillDuotoneProps };
