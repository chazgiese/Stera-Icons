import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpRightDownLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightDownLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowUpRightDownLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-right-down-left" {...props}>
      <path fill="currentColor" d="M20 3.25c.41 0 .75.34.75.75v6.5a.75.75 0 0 1-1.5 0V5.81L5.81 19.25h4.69a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75v-6.5a.75.75 0 0 1 1.5 0v4.69L18.19 4.75H13.5a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ArrowUpRightDownLeftRegular.displayName = 'ArrowUpRightDownLeftRegular';

// Triple export pattern (lucide-react style)
export { ArrowUpRightDownLeftRegular, ArrowUpRightDownLeftRegular as ArrowUpRightDownLeftRegularIcon, ArrowUpRightDownLeftRegular as SiArrowUpRightDownLeftRegular };
export type { ArrowUpRightDownLeftRegularProps };
