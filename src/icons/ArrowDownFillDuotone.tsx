import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-down-fill-duotone" {...props}>
      <path d="M12 4a1 1 0 0 1 1 1v7h-2V5a1 1 0 0 1 1-1" opacity={.4} />
        <path d="M18 12a1 1 0 0 1 .7 1.7l-6 6a1 1 0 0 1-1.4 0l-6-6A1 1 0 0 1 6 12z" />
    </IconBase>
  ))
);

ArrowDownFillDuotone.displayName = 'ArrowDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowDownFillDuotone, ArrowDownFillDuotone as ArrowDownFillDuotoneIcon, ArrowDownFillDuotone as SiArrowDownFillDuotone };
export default ArrowDownFillDuotone;
export type { ArrowDownFillDuotoneProps };
