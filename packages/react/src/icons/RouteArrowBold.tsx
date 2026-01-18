import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RouteArrowBoldProps = Omit<IconBaseProps, 'children'>;

const RouteArrowBold = memo(
  forwardRef<SVGSVGElement, RouteArrowBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.5 2a3.5 3.5 0 0 1 3.35 2.5h4.9a4.25 4.25 0 0 1 0 8.5h-4.5a2.25 2.25 0 0 0 0 4.5h8.34l-1.3-1.3a1 1 0 1 1 1.42-1.4l3 3a1 1 0 0 1 0 1.4l-3 3a1 1 0 1 1-1.42-1.4l1.3-1.3H9.25a4.25 4.25 0 0 1 0-8.5h4.5a2.25 2.25 0 0 0 0-4.5h-4.9A3.5 3.5 0 1 1 5.5 2m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

RouteArrowBold.displayName = 'RouteArrowBold';

// Triple export pattern (lucide-react style)
export { RouteArrowBold, RouteArrowBold as RouteArrowBoldIcon, RouteArrowBold as SiRouteArrowBold };
export type { RouteArrowBoldProps };
