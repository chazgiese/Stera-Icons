import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowDownLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M17.3 5.3a1 1 0 1 1 1.4 1.4l-6.79 6.8-1.41-1.41z" opacity={.4} />
        <path fill="currentColor" d="M5.62 8.08a1 1 0 0 1 1.09.21l9 9A1 1 0 0 1 15 19H6a1 1 0 0 1-1-1V9a1 1 0 0 1 .62-.92" />
    </IconBase>
  ))
);

ArrowDownLeftFillDuotone.displayName = 'ArrowDownLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowDownLeftFillDuotone, ArrowDownLeftFillDuotone as ArrowDownLeftFillDuotoneIcon, ArrowDownLeftFillDuotone as SiArrowDownLeftFillDuotone };
export type { ArrowDownLeftFillDuotoneProps };
