import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronOutwardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronOutwardFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronOutwardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18 15a1 1 0 0 1 .7 1.7l-6 6a1 1 0 0 1-1.4 0l-6-6A1 1 0 0 1 6 15z" opacity={.4} />
        <path fill="currentColor" d="M11.3 1.3a1 1 0 0 1 1.4 0l6 6A1 1 0 0 1 18 9H6a1 1 0 0 1-.7-1.7z" />
    </IconBase>
  ))
);

ChevronOutwardFillDuotone.displayName = 'ChevronOutwardFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronOutwardFillDuotone, ChevronOutwardFillDuotone as ChevronOutwardFillDuotoneIcon, ChevronOutwardFillDuotone as SiChevronOutwardFillDuotone };
export type { ChevronOutwardFillDuotoneProps };
