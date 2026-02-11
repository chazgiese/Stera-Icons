import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullInwardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullInwardFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullInwardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-inward-fill-duotone" {...props}>
      <path d="M11.3 14.3a1 1 0 0 1 1.4 0l6 6A1 1 0 0 1 18 22H6a1 1 0 0 1-.7-1.7z" opacity={.4} />
        <path d="M18 2a1 1 0 0 1 .7 1.7l-6 6a1 1 0 0 1-1.4 0l-6-6A1 1 0 0 1 6 2z" />
    </IconBase>
  ))
);

ChevronFullInwardFillDuotone.displayName = 'ChevronFullInwardFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullInwardFillDuotone, ChevronFullInwardFillDuotone as ChevronFullInwardFillDuotoneIcon, ChevronFullInwardFillDuotone as SiChevronFullInwardFillDuotone };
export default ChevronFullInwardFillDuotone;
export type { ChevronFullInwardFillDuotoneProps };
