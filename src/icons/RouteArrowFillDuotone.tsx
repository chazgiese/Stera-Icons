import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RouteArrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RouteArrowFillDuotone = memo(
  forwardRef<SVGSVGElement, RouteArrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="route-arrow-fill-duotone" {...props}>
      <path d="M13.75 4.5a4.25 4.25 0 0 1 0 8.5h-4.5a2.25 2.25 0 0 0 0 4.5H16v2H9.25a4.25 4.25 0 0 1 0-8.5h4.5a2.25 2.25 0 0 0 0-4.5h-4.9a3.5 3.5 0 0 0 0-2z" opacity={.4} />
        <path d="M16.62 14.58a1 1 0 0 1 1.09.21l3 3a1 1 0 0 1 0 1.42l-3 3A1 1 0 0 1 16 21.5v-6a1 1 0 0 1 .62-.92M5.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

RouteArrowFillDuotone.displayName = 'RouteArrowFillDuotone';

// Triple export pattern (lucide-react style)
export { RouteArrowFillDuotone, RouteArrowFillDuotone as RouteArrowFillDuotoneIcon, RouteArrowFillDuotone as SiRouteArrowFillDuotone };
export default RouteArrowFillDuotone;
export type { RouteArrowFillDuotoneProps };
