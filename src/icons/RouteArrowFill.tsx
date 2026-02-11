import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RouteArrowFillProps = Omit<IconBaseProps, 'children'>;

const RouteArrowFill = memo(
  forwardRef<SVGSVGElement, RouteArrowFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="route-arrow-fill" {...props}>
      <path d="M5.5 2a3.5 3.5 0 0 1 3.35 2.5h4.9a4.25 4.25 0 0 1 0 8.5h-4.5a2.25 2.25 0 0 0 0 4.5H16v-2a1 1 0 0 1 1.7-.7l3 3a1 1 0 0 1 0 1.4l-3 3a1 1 0 0 1-1.7-.7v-2H9.25a4.25 4.25 0 0 1 0-8.5h4.5a2.25 2.25 0 0 0 0-4.5h-4.9A3.5 3.5 0 1 1 5.5 2" />
    </IconBase>
  ))
);

RouteArrowFill.displayName = 'RouteArrowFill';

// Triple export pattern (lucide-react style)
export { RouteArrowFill, RouteArrowFill as RouteArrowFillIcon, RouteArrowFill as SiRouteArrowFill };
export default RouteArrowFill;
export type { RouteArrowFillProps };
