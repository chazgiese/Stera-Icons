import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RouteArrowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RouteArrowRegularDuotone = memo(
  forwardRef<SVGSVGElement, RouteArrowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="route-arrow-duotone" {...props}>
      <path fill="currentColor" d="M13.75 4.75a4 4 0 0 1 0 8h-4.5a2.5 2.5 0 0 0 0 5h8.94l.75.75-.75.75H9.25a4 4 0 0 1 0-8h4.5a2.5 2.5 0 0 0 0-5H8.66a3 3 0 0 0 0-1.5z" opacity={.4} />
        <path fill="currentColor" d="M16.47 14.97c.3-.3.77-.3 1.06 0l3 3c.3.3.3.77 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l2.47-2.47-2.47-2.47a.75.75 0 0 1 0-1.06" />
        <path fill="currentColor" fillRule="evenodd" d="M5.5 2.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

RouteArrowRegularDuotone.displayName = 'RouteArrowRegularDuotone';

// Triple export pattern (lucide-react style)
export { RouteArrowRegularDuotone, RouteArrowRegularDuotone as RouteArrowRegularDuotoneIcon, RouteArrowRegularDuotone as SiRouteArrowRegularDuotone };
export type { RouteArrowRegularDuotoneProps };
