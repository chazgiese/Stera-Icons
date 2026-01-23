import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OverlappingCirclesDashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesDashFillDuotone = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesDashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="overlapping-circles-dash-fill-duotone" {...props}>
      <path fill="currentColor" d="M8.5 4.5c1.49 0 2.87.43 4.04 1.18a1 1 0 0 1 0 1.68q-.24.15-.47.34l.08-.06a1 1 0 0 0-1.22-1.59q-.78.6-1.38 1.38a1 1 0 0 0 1.59 1.22l.06-.07a5.5 5.5 0 0 0-1.15 2.7 1 1 0 0 0-1.99-.26 8 8 0 0 0 0 1.96 1 1 0 0 0 1.99-.25 5.5 5.5 0 0 0 1.15 2.7l-.06-.08a1 1 0 0 0-1.59 1.22q.6.78 1.38 1.38a1 1 0 0 0 1.22-1.59l-.08-.07q.22.19.47.35a1 1 0 0 1 0 1.68A7.5 7.5 0 1 1 8.5 4.5" opacity={.4} />
        <path fill="currentColor" d="M16.22 17.45a1 1 0 0 1 .26 1.99 8 8 0 0 1-1.96 0 1 1 0 0 1 .26-1.99 6 6 0 0 0 1.44 0M9.73 15.16a1 1 0 0 1 1.4.19q.45.57 1.02 1.01a1 1 0 0 1-1.22 1.59q-.78-.6-1.38-1.38a1 1 0 0 1 .18-1.4M19.86 15.35a1 1 0 0 1 1.59 1.22q-.6.78-1.38 1.38a1 1 0 0 1-1.22-1.59q.57-.44 1.01-1.01M9.18 10.16a1 1 0 0 1 .87 1.12 6 6 0 0 0 0 1.44 1 1 0 0 1-1.99.26 8 8 0 0 1 0-1.96 1 1 0 0 1 1.12-.86M21.82 10.16a1 1 0 0 1 1.12.86 8 8 0 0 1 0 1.96 1 1 0 0 1-1.99-.26 6 6 0 0 0 0-1.44 1 1 0 0 1 .87-1.12M10.93 6.05a1 1 0 0 1 1.22 1.59q-.57.44-1.01 1.01a1 1 0 0 1-1.59-1.22q.6-.78 1.38-1.38M18.66 6.23a1 1 0 0 1 1.4-.18q.8.6 1.39 1.38a1 1 0 0 1-1.59 1.22q-.44-.57-1.01-1.01a1 1 0 0 1-.19-1.4M15.5 4.5q.5 0 .98.06a1 1 0 0 1-.26 1.99 6 6 0 0 0-1.44 0 1 1 0 0 1-.26-1.99q.48-.06.98-.06" />
    </IconBase>
  ))
);

OverlappingCirclesDashFillDuotone.displayName = 'OverlappingCirclesDashFillDuotone';

// Triple export pattern (lucide-react style)
export { OverlappingCirclesDashFillDuotone, OverlappingCirclesDashFillDuotone as OverlappingCirclesDashFillDuotoneIcon, OverlappingCirclesDashFillDuotone as SiOverlappingCirclesDashFillDuotone };
export default OverlappingCirclesDashFillDuotone;
export type { OverlappingCirclesDashFillDuotoneProps };
