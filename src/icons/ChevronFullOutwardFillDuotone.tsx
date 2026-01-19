import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullOutwardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullOutwardFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullOutwardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-outward-fill-duotone" {...props}>
      <path fill="currentColor" d="M18 15a1 1 0 0 1 .7 1.7l-6 6a1 1 0 0 1-1.4 0l-6-6A1 1 0 0 1 6 15z" opacity={.4} />
        <path fill="currentColor" d="M11.3 1.3a1 1 0 0 1 1.4 0l6 6A1 1 0 0 1 18 9H6a1 1 0 0 1-.7-1.7z" />
    </IconBase>
  ))
);

ChevronFullOutwardFillDuotone.displayName = 'ChevronFullOutwardFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullOutwardFillDuotone, ChevronFullOutwardFillDuotone as ChevronFullOutwardFillDuotoneIcon, ChevronFullOutwardFillDuotone as SiChevronFullOutwardFillDuotone };
export type { ChevronFullOutwardFillDuotoneProps };
