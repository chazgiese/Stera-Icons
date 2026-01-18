import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RouteArrowRegularProps = Omit<IconBaseProps, 'children'>;

const RouteArrowRegular = memo(
  forwardRef<SVGSVGElement, RouteArrowRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.5 2.25a3.25 3.25 0 0 1 3.16 2.5h5.09a4 4 0 0 1 0 8h-4.5a2.5 2.5 0 0 0 0 5h8.94l-1.72-1.72a.75.75 0 1 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9.25a4 4 0 0 1 0-8h4.5a2.5 2.5 0 0 0 0-5H8.66a3.25 3.25 0 1 1-3.16-4m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

RouteArrowRegular.displayName = 'RouteArrowRegular';

export { RouteArrowRegular };
export type { RouteArrowRegularProps };
