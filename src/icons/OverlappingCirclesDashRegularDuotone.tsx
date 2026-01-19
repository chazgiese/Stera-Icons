import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type OverlappingCirclesDashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesDashRegularDuotone = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesDashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="overlapping-circles-dash-duotone" {...props}>
      <path fill="currentColor" d="M8.5 4.75c1.44 0 2.78.42 3.9 1.14a.75.75 0 0 1-.23 1.36.75.75 0 0 0-1.08-1q-.25.2-.48.4A5.73 5.73 0 0 0 2.75 12a5.75 5.75 0 0 0 7.86 5.35q.22.2.48.4c.32.25.8.2 1.05-.14.2-.26.2-.6.03-.86a.75.75 0 0 1 .23 1.36A7.25 7.25 0 1 1 8.5 4.75" opacity={.4} />
        <path fill="currentColor" d="M16.25 17.7a.75.75 0 0 1 .2 1.49 7 7 0 0 1-1.9 0 .75.75 0 0 1 .2-1.49 6 6 0 0 0 1.5 0M9.89 15.36c.32-.25.8-.19 1.05.14q.46.6 1.06 1.06a.75.75 0 0 1-.91 1.2 7 7 0 0 1-1.34-1.35.75.75 0 0 1 .14-1.05M20.06 15.5a.75.75 0 0 1 1.2.91q-.6.76-1.35 1.34a.75.75 0 0 1-.91-1.19q.6-.46 1.06-1.06M9.15 10.4c.41.06.7.44.65.85a6 6 0 0 0 0 1.5.75.75 0 0 1-1.49.2 7 7 0 0 1 0-1.9c.06-.4.43-.7.84-.64M21.85 10.4c.4-.05.78.24.84.65a7 7 0 0 1 0 1.9.75.75 0 0 1-1.49-.2 6 6 0 0 0 0-1.5.75.75 0 0 1 .65-.84M11.09 6.25A.75.75 0 0 1 12 7.44q-.6.46-1.06 1.06a.75.75 0 0 1-1.2-.91q.6-.76 1.35-1.34M18.86 6.39a.75.75 0 0 1 1.05-.14q.76.57 1.34 1.34a.75.75 0 0 1-1.19.91Q19.6 7.9 19 7.44a.75.75 0 0 1-.14-1.05M15.5 4.75q.48 0 .95.06a.75.75 0 0 1-.2 1.49 6 6 0 0 0-1.5 0 .75.75 0 0 1-.2-1.49q.47-.06.95-.06" />
    </IconBase>
  ))
);

OverlappingCirclesDashRegularDuotone.displayName = 'OverlappingCirclesDashRegularDuotone';

// Triple export pattern (lucide-react style)
export { OverlappingCirclesDashRegularDuotone, OverlappingCirclesDashRegularDuotone as OverlappingCirclesDashRegularDuotoneIcon, OverlappingCirclesDashRegularDuotone as SiOverlappingCirclesDashRegularDuotone };
export type { OverlappingCirclesDashRegularDuotoneProps };
