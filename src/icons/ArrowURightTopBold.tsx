import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightTopBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowURightTopBold = memo(
  forwardRef<SVGSVGElement, ArrowURightTopBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-right-top-bold" {...props}>
      <path d="M15.3 3.3a1 1 0 0 1 1.4 0l4 4 .07.07a1 1 0 0 1-.06 1.34l-4 4a1 1 0 1 1-1.42-1.42L17.6 9H10.5a4.5 4.5 0 1 0 0 9H15a1 1 0 1 1 0 2h-4.5a6.5 6.5 0 0 1 0-13h7.09l-2.3-2.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ArrowURightTopBold.displayName = 'ArrowURightTopBold';

// Triple export pattern (lucide-react style)
export { ArrowURightTopBold, ArrowURightTopBold as ArrowURightTopBoldIcon, ArrowURightTopBold as SiArrowURightTopBold };
export default ArrowURightTopBold;
export type { ArrowURightTopBoldProps };
