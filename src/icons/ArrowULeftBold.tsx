import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowULeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftBold = memo(
  forwardRef<SVGSVGElement, ArrowULeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-bold" {...props}>
      <path fill="currentColor" d="M15.5 3a7.5 7.5 0 0 1 0 15H4.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4-.06-.07-.1-.13v-.01a1 1 0 0 1 .16-1.2l4-4a1 1 0 1 1 1.42 1.42L4.4 16H15.5a5.5 5.5 0 1 0 0-11H8a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ArrowULeftBold.displayName = 'ArrowULeftBold';

// Triple export pattern (lucide-react style)
export { ArrowULeftBold, ArrowULeftBold as ArrowULeftBoldIcon, ArrowULeftBold as SiArrowULeftBold };
export default ArrowULeftBold;
export type { ArrowULeftBoldProps };
