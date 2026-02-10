import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowURightBold = memo(
  forwardRef<SVGSVGElement, ArrowURightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-right-bold" {...props}>
      <path fill="currentColor" d="M15 4a1 1 0 1 1 0 2h-4.5a4.5 4.5 0 0 0 0 9h7.09l-2.3-2.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 .06 1.33l-.06.08-4 4a1 1 0 1 1-1.42-1.42L17.6 17H10.5a6.5 6.5 0 1 1 0-13z" />
    </IconBase>
  ))
);

ArrowURightBold.displayName = 'ArrowURightBold';

// Triple export pattern (lucide-react style)
export { ArrowURightBold, ArrowURightBold as ArrowURightBoldIcon, ArrowURightBold as SiArrowURightBold };
export default ArrowURightBold;
export type { ArrowURightBoldProps };
