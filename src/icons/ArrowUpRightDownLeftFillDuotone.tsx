import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightDownLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightDownLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpRightDownLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-right-down-left-fill-duotone" {...props}>
      <path d="m16.75 8.66-8.09 8.09-1.41-1.41 8.09-8.09z" opacity={.4} />
        <path d="M3.62 12.58a1 1 0 0 1 1.09.21l6.5 6.5A1 1 0 0 1 10.5 21H4a1 1 0 0 1-1-1v-6.5a1 1 0 0 1 .62-.92M20 3a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1.7.7l-6.5-6.5a1 1 0 0 1 .7-1.7z" />
    </IconBase>
  ))
);

ArrowUpRightDownLeftFillDuotone.displayName = 'ArrowUpRightDownLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpRightDownLeftFillDuotone, ArrowUpRightDownLeftFillDuotone as ArrowUpRightDownLeftFillDuotoneIcon, ArrowUpRightDownLeftFillDuotone as SiArrowUpRightDownLeftFillDuotone };
export default ArrowUpRightDownLeftFillDuotone;
export type { ArrowUpRightDownLeftFillDuotoneProps };
