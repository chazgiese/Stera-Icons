import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type OverlappingCirclesFillProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesFill = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="overlapping-circles-fill" {...props}>
      <path fill="currentColor" d="M8.5 4.5c1.26 0 2.46.31 3.5.87a7.5 7.5 0 0 0 0 13.26A7.5 7.5 0 1 1 8.5 4.5M15.5 4.5A7.5 7.5 0 1 1 12 18.63a7.5 7.5 0 0 0 0-13.26 7.5 7.5 0 0 1 3.5-.87" />
    </IconBase>
  ))
);

OverlappingCirclesFill.displayName = 'OverlappingCirclesFill';

// Triple export pattern (lucide-react style)
export { OverlappingCirclesFill, OverlappingCirclesFill as OverlappingCirclesFillIcon, OverlappingCirclesFill as SiOverlappingCirclesFill };
export type { OverlappingCirclesFillProps };
