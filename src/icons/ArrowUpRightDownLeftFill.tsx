import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightDownLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightDownLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowUpRightDownLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-right-down-left-fill" {...props}>
      <path d="M20 3a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1.7.7l-2.55-2.54-8.09 8.09 2.55 2.54A1 1 0 0 1 10.5 21H4a1 1 0 0 1-1-1v-6.5a1 1 0 0 1 1.7-.7l2.55 2.54 8.09-8.09-2.55-2.54A1 1 0 0 1 13.5 3z" />
    </IconBase>
  ))
);

ArrowUpRightDownLeftFill.displayName = 'ArrowUpRightDownLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowUpRightDownLeftFill, ArrowUpRightDownLeftFill as ArrowUpRightDownLeftFillIcon, ArrowUpRightDownLeftFill as SiArrowUpRightDownLeftFill };
export default ArrowUpRightDownLeftFill;
export type { ArrowUpRightDownLeftFillProps };
