import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLineLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowLineLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowLineLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-line-left-bold" {...props}>
      <path fill="currentColor" d="M3 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1M13.3 4.3a1 1 0 1 1 1.4 1.4L9.42 11H21a1 1 0 1 1 0 2H9.41l5.3 5.3a1 1 0 1 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

ArrowLineLeftBold.displayName = 'ArrowLineLeftBold';

// Triple export pattern (lucide-react style)
export { ArrowLineLeftBold, ArrowLineLeftBold as ArrowLineLeftBoldIcon, ArrowLineLeftBold as SiArrowLineLeftBold };
export default ArrowLineLeftBold;
export type { ArrowLineLeftBoldProps };
