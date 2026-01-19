import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCornerDownLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-down-left-bold" {...props}>
      <path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H5.41l3.3 3.3a1 1 0 1 1-1.42 1.4l-5-5-.06-.07-.1-.13v-.01a1 1 0 0 1 .16-1.2l5-5a1 1 0 1 1 1.42 1.42L5.4 14H18a2 2 0 0 0 2-2V4a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowCornerDownLeftBold.displayName = 'ArrowCornerDownLeftBold';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownLeftBold, ArrowCornerDownLeftBold as ArrowCornerDownLeftBoldIcon, ArrowCornerDownLeftBold as SiArrowCornerDownLeftBold };
export default ArrowCornerDownLeftBold;
export type { ArrowCornerDownLeftBoldProps };
