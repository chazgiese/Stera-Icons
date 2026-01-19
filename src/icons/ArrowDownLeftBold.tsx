import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowDownLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowDownLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowDownLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-down-left-bold" {...props}>
      <path fill="currentColor" d="M17.3 5.3a1 1 0 1 1 1.4 1.4L8.42 17H16a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v7.59z" />
    </IconBase>
  ))
);

ArrowDownLeftBold.displayName = 'ArrowDownLeftBold';

// Triple export pattern (lucide-react style)
export { ArrowDownLeftBold, ArrowDownLeftBold as ArrowDownLeftBoldIcon, ArrowDownLeftBold as SiArrowDownLeftBold };
export default ArrowDownLeftBold;
export type { ArrowDownLeftBoldProps };
