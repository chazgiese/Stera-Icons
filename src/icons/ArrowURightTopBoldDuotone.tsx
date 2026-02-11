import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightTopBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowURightTopBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowURightTopBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-right-top-bold-duotone" {...props}>
      <path d="m18.59 8-1 1H10.5a4.5 4.5 0 1 0 0 9H15a1 1 0 1 1 0 2h-4.5a6.5 6.5 0 1 1 0-13h7.09z" opacity={.4} />
        <path d="M15.3 3.3a1 1 0 0 1 1.4 0l4 4 .07.07a1 1 0 0 1-.06 1.34l-4 4a1 1 0 0 1-1.42-1.42L18.6 8l-3.3-3.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ArrowURightTopBoldDuotone.displayName = 'ArrowURightTopBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowURightTopBoldDuotone, ArrowURightTopBoldDuotone as ArrowURightTopBoldDuotoneIcon, ArrowURightTopBoldDuotone as SiArrowURightTopBoldDuotone };
export default ArrowURightTopBoldDuotone;
export type { ArrowURightTopBoldDuotoneProps };
