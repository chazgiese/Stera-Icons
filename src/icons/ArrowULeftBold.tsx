import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftBold = memo(
  forwardRef<SVGSVGElement, ArrowULeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-bold" {...props}>
      <path fill="currentColor" d="M13.5 4a6.5 6.5 0 1 1 0 13H6.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4-.06-.07a1 1 0 0 1 .06-1.34l4-4a1 1 0 1 1 1.42 1.42L6.4 15h7.09a4.5 4.5 0 1 0 0-9H9a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ArrowULeftBold.displayName = 'ArrowULeftBold';

// Triple export pattern (lucide-react style)
export { ArrowULeftBold, ArrowULeftBold as ArrowULeftBoldIcon, ArrowULeftBold as SiArrowULeftBold };
export default ArrowULeftBold;
export type { ArrowULeftBoldProps };
