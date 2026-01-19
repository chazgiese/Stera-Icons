import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLineLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-line-left-fill-duotone" {...props}>
      <path fill="currentColor" d="M12.7 5.24a1.2 1.2 0 0 1 2.05.85v4.9H21a1 1 0 0 1 0 2h-6.25v4.92a1.2 1.2 0 0 1-2.05.85L6.84 12.9c-.5-.5-.5-1.3 0-1.8z" />
        <path fill="currentColor" d="M3 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1" opacity={.4} />
    </IconBase>
  ))
);

ArrowLineLeftFillDuotone.displayName = 'ArrowLineLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLineLeftFillDuotone, ArrowLineLeftFillDuotone as ArrowLineLeftFillDuotoneIcon, ArrowLineLeftFillDuotone as SiArrowLineLeftFillDuotone };
export type { ArrowLineLeftFillDuotoneProps };
