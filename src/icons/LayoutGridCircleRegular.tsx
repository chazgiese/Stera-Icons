import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutGridCircleRegularProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCircleRegular = memo(
  forwardRef<SVGSVGElement, LayoutGridCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-grid-circle" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.88 13a4.12 4.12 0 1 1 0 8.25 4.12 4.12 0 0 1 0-8.25m0 1.5a2.63 2.63 0 1 0 0 5.25 2.63 2.63 0 0 0 0-5.25M17.13 13a4.12 4.12 0 1 1 0 8.25 4.12 4.12 0 0 1 0-8.25m0 1.5a2.63 2.63 0 1 0 0 5.25 2.63 2.63 0 0 0 0-5.25M6.88 2.75a4.13 4.13 0 1 1 0 8.25 4.13 4.13 0 0 1 0-8.25m0 1.5a2.62 2.62 0 1 0 0 5.25 2.62 2.62 0 0 0 0-5.25M17.13 2.75a4.12 4.12 0 1 1 0 8.25 4.12 4.12 0 0 1 0-8.25m0 1.5a2.63 2.63 0 1 0 0 5.25 2.63 2.63 0 0 0 0-5.25" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutGridCircleRegular.displayName = 'LayoutGridCircleRegular';

// Triple export pattern (lucide-react style)
export { LayoutGridCircleRegular, LayoutGridCircleRegular as LayoutGridCircleRegularIcon, LayoutGridCircleRegular as SiLayoutGridCircleRegular };
export default LayoutGridCircleRegular;
export type { LayoutGridCircleRegularProps };
