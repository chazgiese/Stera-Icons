import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type OverlappingCirclesDashRegularProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesDashRegular = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesDashRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="overlapping-circles-dash" {...props}>
      <path fill="currentColor" d="M8.5 4.75c1.44 0 2.78.42 3.9 1.14a.75.75 0 0 1-.23 1.36 1 1 0 0 1-.17.19q-.6.46-1.06 1.06a.75.75 0 0 1-1.2-.91q.4-.5.87-.94A5.73 5.73 0 0 0 2.75 12a5.75 5.75 0 0 0 7.86 5.35 7 7 0 0 1-.86-.94.75.75 0 0 1 1.19-.91q.46.6 1.06 1.06.1.09.17.19a.75.75 0 0 1 .23 1.36A7.25 7.25 0 1 1 8.5 4.75M16.25 17.7a.75.75 0 0 1 .2 1.49 7 7 0 0 1-1.9 0 .75.75 0 0 1 .2-1.49 6 6 0 0 0 1.5 0M20.06 15.5a.75.75 0 0 1 1.2.91q-.6.76-1.35 1.34a.75.75 0 0 1-.91-1.19q.6-.46 1.06-1.06" />
        <path fill="currentColor" d="M9.15 10.4c.41.06.7.44.65.85a6 6 0 0 0 0 1.5.75.75 0 0 1-1.49.2 7 7 0 0 1 0-1.9c.06-.4.43-.7.84-.64M21.85 10.4c.4-.05.78.24.84.65a7 7 0 0 1 0 1.9.75.75 0 0 1-1.49-.2 6 6 0 0 0 0-1.5.75.75 0 0 1 .65-.84M18.86 6.39a.75.75 0 0 1 1.05-.14q.76.57 1.34 1.34a.75.75 0 0 1-1.19.91Q19.6 7.9 19 7.44a.75.75 0 0 1-.14-1.05M15.5 4.75q.48 0 .95.06a.75.75 0 0 1-.2 1.49 6 6 0 0 0-1.5 0 .75.75 0 0 1-.2-1.49q.47-.06.95-.06" />
    </IconBase>
  ))
);

OverlappingCirclesDashRegular.displayName = 'OverlappingCirclesDashRegular';

// Triple export pattern (lucide-react style)
export { OverlappingCirclesDashRegular, OverlappingCirclesDashRegular as OverlappingCirclesDashRegularIcon, OverlappingCirclesDashRegular as SiOverlappingCirclesDashRegular };
export default OverlappingCirclesDashRegular;
export type { OverlappingCirclesDashRegularProps };
