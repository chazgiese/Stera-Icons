import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpRightDownLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightDownLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowUpRightDownLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-right-down-left-bold" {...props}>
      <path fill="currentColor" d="M20 3a1 1 0 0 1 1 1v6.5a1 1 0 1 1-2 0V6.41L6.41 19h4.09a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1v-6.5a1 1 0 1 1 2 0v4.09L17.59 5H13.5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ArrowUpRightDownLeftBold.displayName = 'ArrowUpRightDownLeftBold';

// Triple export pattern (lucide-react style)
export { ArrowUpRightDownLeftBold, ArrowUpRightDownLeftBold as ArrowUpRightDownLeftBoldIcon, ArrowUpRightDownLeftBold as SiArrowUpRightDownLeftBold };
export default ArrowUpRightDownLeftBold;
export type { ArrowUpRightDownLeftBoldProps };
