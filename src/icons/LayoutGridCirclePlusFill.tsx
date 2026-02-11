import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutGridCirclePlusFillProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCirclePlusFill = memo(
  forwardRef<SVGSVGElement, LayoutGridCirclePlusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-grid-circle-plus-fill" {...props}>
      <path d="M17.13 12.75a1 1 0 0 1 1 1v2.38h2.37a1 1 0 1 1 0 2h-2.37v2.37a1 1 0 1 1-2 0v-2.37h-2.38a1 1 0 1 1 0-2h2.38v-2.38a1 1 0 0 1 1-1M6.88 12.88a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5M6.88 2.63a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5M17.13 2.63a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5" />
    </IconBase>
  ))
);

LayoutGridCirclePlusFill.displayName = 'LayoutGridCirclePlusFill';

// Triple export pattern (lucide-react style)
export { LayoutGridCirclePlusFill, LayoutGridCirclePlusFill as LayoutGridCirclePlusFillIcon, LayoutGridCirclePlusFill as SiLayoutGridCirclePlusFill };
export default LayoutGridCirclePlusFill;
export type { LayoutGridCirclePlusFillProps };
