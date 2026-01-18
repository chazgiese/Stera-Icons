import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13 12v7a1 1 0 1 1-2 0v-7z" opacity={.4} />
        <path fill="currentColor" d="M12 4a1 1 0 0 1 .7.3l6 6A1 1 0 0 1 18 12H6a1 1 0 0 1-.7-1.7l6-6A1 1 0 0 1 12 4" />
    </IconBase>
  ))
);

ArrowUpFillDuotone.displayName = 'ArrowUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpFillDuotone, ArrowUpFillDuotone as ArrowUpFillDuotoneIcon, ArrowUpFillDuotone as SiArrowUpFillDuotone };
export type { ArrowUpFillDuotoneProps };
