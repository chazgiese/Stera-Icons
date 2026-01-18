import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLineDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M20 20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M12 2a1 1 0 0 1 1 1v11.59l5.3-5.3a1 1 0 1 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 1 1 1.4-1.42l5.3 5.3V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowLineDownBoldDuotone.displayName = 'ArrowLineDownBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLineDownBoldDuotone, ArrowLineDownBoldDuotone as ArrowLineDownBoldDuotoneIcon, ArrowLineDownBoldDuotone as SiArrowLineDownBoldDuotone };
export type { ArrowLineDownBoldDuotoneProps };
