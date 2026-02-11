import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightTopFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowURightTopFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowURightTopFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-right-top-fill-duotone" {...props}>
      <path d="M15 9h-4.5a4.5 4.5 0 1 0 0 9H15a1 1 0 1 1 0 2h-4.5a6.5 6.5 0 1 1 0-13H15z" opacity={.4} />
        <path d="M15.62 3.08a1 1 0 0 1 1.09.21l4 4 .06.08a1 1 0 0 1-.06 1.34l-4 4A1 1 0 0 1 15 12V4a1 1 0 0 1 .62-.92" />
    </IconBase>
  ))
);

ArrowURightTopFillDuotone.displayName = 'ArrowURightTopFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowURightTopFillDuotone, ArrowURightTopFillDuotone as ArrowURightTopFillDuotoneIcon, ArrowURightTopFillDuotone as SiArrowURightTopFillDuotone };
export default ArrowURightTopFillDuotone;
export type { ArrowURightTopFillDuotoneProps };
