import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13 17h-2V7h2z" opacity={.4} />
        <path fill="currentColor" d="M16 17a1 1 0 0 1 .7 1.7l-4 4a1 1 0 0 1-1.33.08l-.08-.07-4-4A1 1 0 0 1 8 17zM12 1a1 1 0 0 1 .7.3l4 4A1 1 0 0 1 16 7H8a1 1 0 0 1-.7-1.7l4-4 .07-.07A1 1 0 0 1 12 1" />
    </IconBase>
  ))
);

ArrowUpDownFillDuotone.displayName = 'ArrowUpDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpDownFillDuotone, ArrowUpDownFillDuotone as ArrowUpDownFillDuotoneIcon, ArrowUpDownFillDuotone as SiArrowUpDownFillDuotone };
export type { ArrowUpDownFillDuotoneProps };
