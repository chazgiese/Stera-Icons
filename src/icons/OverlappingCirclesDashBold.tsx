import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OverlappingCirclesDashBoldProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesDashBold = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesDashBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="overlapping-circles-dash-bold" {...props}>
      <path fill="currentColor" d="M8.5 4.5c1.49 0 2.87.43 4.04 1.18a1 1 0 0 1-.22 1.79l-.17.17q-.57.44-1.01 1.01a1 1 0 0 1-1.59-1.22q.27-.36.6-.68a5.5 5.5 0 1 0 0 10.5q-.33-.33-.6-.68a1 1 0 0 1 1.59-1.22q.44.57 1.01 1.01l.17.17a1 1 0 0 1 .22 1.79A7.5 7.5 0 1 1 8.5 4.5M16.22 17.45a1 1 0 0 1 .26 1.99 8 8 0 0 1-1.96 0 1 1 0 0 1 .26-1.99 6 6 0 0 0 1.44 0M19.86 15.35a1 1 0 0 1 1.59 1.22q-.6.78-1.38 1.38a1 1 0 0 1-1.22-1.59q.57-.44 1.01-1.01" />
        <path fill="currentColor" d="M9.18 10.16a1 1 0 0 1 .87 1.12 6 6 0 0 0 0 1.44 1 1 0 0 1-1.99.26 8 8 0 0 1 0-1.96 1 1 0 0 1 1.12-.86M21.82 10.16a1 1 0 0 1 1.12.86 8 8 0 0 1 0 1.96 1 1 0 0 1-1.99-.26 6 6 0 0 0 0-1.44 1 1 0 0 1 .87-1.12M18.66 6.23a1 1 0 0 1 1.4-.18q.8.6 1.39 1.38a1 1 0 0 1-1.59 1.22q-.44-.57-1.01-1.01a1 1 0 0 1-.19-1.4M15.5 4.5q.5 0 .98.06a1 1 0 0 1-.26 1.99 6 6 0 0 0-1.44 0 1 1 0 0 1-.26-1.99q.48-.06.98-.06" />
    </IconBase>
  ))
);

OverlappingCirclesDashBold.displayName = 'OverlappingCirclesDashBold';

// Triple export pattern (lucide-react style)
export { OverlappingCirclesDashBold, OverlappingCirclesDashBold as OverlappingCirclesDashBoldIcon, OverlappingCirclesDashBold as SiOverlappingCirclesDashBold };
export default OverlappingCirclesDashBold;
export type { OverlappingCirclesDashBoldProps };
