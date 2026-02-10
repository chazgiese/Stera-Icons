import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowURightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowURightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-right-bold-duotone" {...props}>
      <path fill="currentColor" d="M15 4a1 1 0 1 1 0 2h-4.5a4.5 4.5 0 0 0 0 9h7.09l1 1-1 1H10.5a6.5 6.5 0 1 1 0-13z" opacity={.4} />
        <path fill="currentColor" d="M15.3 11.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 .07 1.33l-.06.08-4 4a1 1 0 0 1-1.42-1.42L18.6 16l-3.3-3.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ArrowURightBoldDuotone.displayName = 'ArrowURightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowURightBoldDuotone, ArrowURightBoldDuotone as ArrowURightBoldDuotoneIcon, ArrowURightBoldDuotone as SiArrowURightBoldDuotone };
export default ArrowURightBoldDuotone;
export type { ArrowURightBoldDuotoneProps };
