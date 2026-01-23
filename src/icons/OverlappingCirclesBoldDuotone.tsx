import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OverlappingCirclesBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesBoldDuotone = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="overlapping-circles-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.5 4.5A7.5 7.5 0 1 0 12 18.64a8 8 0 0 1-1.86-1.39 5.5 5.5 0 1 1 0-10.5A8 8 0 0 1 12 5.37a7.5 7.5 0 0 0-3.5-.87M12 16.24a5.5 5.5 0 0 0 0-8.48q.82-.69 1.86-1.01a7.5 7.5 0 0 1 0 10.5 6 6 0 0 1-1.86-1" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M15.5 4.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15m0 2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

OverlappingCirclesBoldDuotone.displayName = 'OverlappingCirclesBoldDuotone';

// Triple export pattern (lucide-react style)
export { OverlappingCirclesBoldDuotone, OverlappingCirclesBoldDuotone as OverlappingCirclesBoldDuotoneIcon, OverlappingCirclesBoldDuotone as SiOverlappingCirclesBoldDuotone };
export default OverlappingCirclesBoldDuotone;
export type { OverlappingCirclesBoldDuotoneProps };
