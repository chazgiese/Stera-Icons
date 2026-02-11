import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 5a1 1 0 0 0-1 1v5.59l-2.3-2.3a1 1 0 1 0-1.4 1.42l4 4a1 1 0 0 0 1.4 0l4-4a1 1 0 1 0-1.4-1.42L13 13.6V8a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path d="M12 7a1 1 0 0 1 1 1v5.59l2.3-2.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42l2.3 2.3V8a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowCircleDownFillDuotone.displayName = 'ArrowCircleDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownFillDuotone, ArrowCircleDownFillDuotone as ArrowCircleDownFillDuotoneIcon, ArrowCircleDownFillDuotone as SiArrowCircleDownFillDuotone };
export default ArrowCircleDownFillDuotone;
export type { ArrowCircleDownFillDuotoneProps };
