import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpRightDownLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightDownLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpRightDownLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-right-down-left-duotone" {...props}>
      <path fill="currentColor" d="M4 12.75c.41 0 .75.34.75.75v5.75h5.75a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75v-6.5c0-.41.34-.75.75-.75M20 3.25c.41 0 .75.34.75.75v6.5a.75.75 0 0 1-1.5 0V4.75H13.5a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" d="M19.25 4.75v1.06L5.81 19.25H4.75v-1.06L18.19 4.75z" opacity={.4} />
    </IconBase>
  ))
);

ArrowUpRightDownLeftRegularDuotone.displayName = 'ArrowUpRightDownLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpRightDownLeftRegularDuotone, ArrowUpRightDownLeftRegularDuotone as ArrowUpRightDownLeftRegularDuotoneIcon, ArrowUpRightDownLeftRegularDuotone as SiArrowUpRightDownLeftRegularDuotone };
export default ArrowUpRightDownLeftRegularDuotone;
export type { ArrowUpRightDownLeftRegularDuotoneProps };
