import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-down-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.48 9.25c1.05 0 1.63 1.21.98 2.03l-3.48 4.35c-.5.63-1.46.63-1.96 0l-3.48-4.35a1.25 1.25 0 0 1 .98-2.03z" />
    </IconBase>
  ))
);

ChevronFullCircleDownBoldDuotone.displayName = 'ChevronFullCircleDownBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleDownBoldDuotone, ChevronFullCircleDownBoldDuotone as ChevronFullCircleDownBoldDuotoneIcon, ChevronFullCircleDownBoldDuotone as SiChevronFullCircleDownBoldDuotone };
export default ChevronFullCircleDownBoldDuotone;
export type { ChevronFullCircleDownBoldDuotoneProps };
