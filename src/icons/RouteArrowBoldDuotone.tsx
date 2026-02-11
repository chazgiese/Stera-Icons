import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RouteArrowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RouteArrowBoldDuotone = memo(
  forwardRef<SVGSVGElement, RouteArrowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="route-arrow-bold-duotone" {...props}>
      <path d="M13.75 4.5a4.25 4.25 0 0 1 0 8.5h-4.5a2.25 2.25 0 0 0 0 4.5h8.34l1 1-1 1H9.25a4.25 4.25 0 0 1 0-8.5h4.5a2.25 2.25 0 0 0 0-4.5h-4.9a3.5 3.5 0 0 0 0-2z" opacity={.4} />
        <path d="M16.3 14.8a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-3 3a1 1 0 1 1-1.4-1.4l2.29-2.3-2.3-2.3a1 1 0 0 1 0-1.4" />
        <path fillRule="evenodd" d="M5.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

RouteArrowBoldDuotone.displayName = 'RouteArrowBoldDuotone';

// Triple export pattern (lucide-react style)
export { RouteArrowBoldDuotone, RouteArrowBoldDuotone as RouteArrowBoldDuotoneIcon, RouteArrowBoldDuotone as SiRouteArrowBoldDuotone };
export default RouteArrowBoldDuotone;
export type { RouteArrowBoldDuotoneProps };
