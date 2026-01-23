import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OverlappingCirclesFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesFillDuotone = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="overlapping-circles-fill-duotone" {...props}>
      <path d="M8.5 4.5c1.26 0 2.46.31 3.5.87a7.5 7.5 0 0 0 0 13.26A7.5 7.5 0 1 1 8.5 4.5M15.5 4.5A7.5 7.5 0 1 1 12 18.63a7.5 7.5 0 0 0 0-13.26 7.5 7.5 0 0 1 3.5-.87" opacity={0.4} />
        <path fill="currentColor" d="M12 5.37a7.5 7.5 0 0 1 0 13.26 7.5 7.5 0 0 1 0-13.26" />
    </IconBase>
  ))
);

OverlappingCirclesFillDuotone.displayName = 'OverlappingCirclesFillDuotone';

// Triple export pattern (lucide-react style)
export { OverlappingCirclesFillDuotone, OverlappingCirclesFillDuotone as OverlappingCirclesFillDuotoneIcon, OverlappingCirclesFillDuotone as SiOverlappingCirclesFillDuotone };
export default OverlappingCirclesFillDuotone;
export type { OverlappingCirclesFillDuotoneProps };
