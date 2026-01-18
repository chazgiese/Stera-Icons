import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLineDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M20 20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M12 2a1 1 0 0 1 1 1v6.25h4.91c1.07 0 1.6 1.3.85 2.05l-5.86 5.86c-.5.5-1.3.5-1.8 0L5.23 11.3a1.2 1.2 0 0 1 .85-2.05h4.9V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowLineDownFillDuotone.displayName = 'ArrowLineDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLineDownFillDuotone, ArrowLineDownFillDuotone as ArrowLineDownFillDuotoneIcon, ArrowLineDownFillDuotone as SiArrowLineDownFillDuotone };
export type { ArrowLineDownFillDuotoneProps };
