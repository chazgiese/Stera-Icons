import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutGridCircleRegularProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCircleRegular = memo(
  forwardRef<SVGSVGElement, LayoutGridCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-grid-circle" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.5 13.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M17.5 13.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M6.5 2.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M17.5 2.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutGridCircleRegular.displayName = 'LayoutGridCircleRegular';

// Triple export pattern (lucide-react style)
export { LayoutGridCircleRegular, LayoutGridCircleRegular as LayoutGridCircleRegularIcon, LayoutGridCircleRegular as SiLayoutGridCircleRegular };
export default LayoutGridCircleRegular;
export type { LayoutGridCircleRegularProps };
