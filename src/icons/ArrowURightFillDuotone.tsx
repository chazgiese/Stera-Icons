import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowURightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowURightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-right-fill-duotone" {...props}>
      <path d="M15 4a1 1 0 1 1 0 2h-4.5a4.5 4.5 0 0 0 0 9H15v2h-4.5a6.5 6.5 0 1 1 0-13z" opacity={.4} />
        <path d="M15.62 11.08a1 1 0 0 1 1.09.21l4 4a1 1 0 0 1 .06 1.34l-.06.08-4 4A1 1 0 0 1 15 20v-8a1 1 0 0 1 .62-.92" />
    </IconBase>
  ))
);

ArrowURightFillDuotone.displayName = 'ArrowURightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowURightFillDuotone, ArrowURightFillDuotone as ArrowURightFillDuotoneIcon, ArrowURightFillDuotone as SiArrowURightFillDuotone };
export default ArrowURightFillDuotone;
export type { ArrowURightFillDuotoneProps };
