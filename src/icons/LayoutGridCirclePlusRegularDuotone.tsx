import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutGridCirclePlusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCirclePlusRegularDuotone = memo(
  forwardRef<SVGSVGElement, LayoutGridCirclePlusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-grid-circle-plus-duotone" {...props}>
      <path d="M17.13 13c.4 0 .75.34.75.75v2.63h2.62a.75.75 0 0 1 0 1.5h-2.62v2.62a.75.75 0 0 1-1.5 0v-2.62h-2.63a.75.75 0 0 1 0-1.5h2.63v-2.63c0-.41.33-.75.75-.75" opacity={.4} />
        <path fillRule="evenodd" d="M6.88 13a4.12 4.12 0 1 1 0 8.25 4.12 4.12 0 0 1 0-8.25m0 1.5a2.63 2.63 0 1 0 0 5.25 2.63 2.63 0 0 0 0-5.25M6.88 2.75a4.13 4.13 0 1 1 0 8.25 4.13 4.13 0 0 1 0-8.25m0 1.5a2.62 2.62 0 1 0 0 5.25 2.62 2.62 0 0 0 0-5.25M17.13 2.75a4.12 4.12 0 1 1 0 8.25 4.12 4.12 0 0 1 0-8.25m0 1.5a2.63 2.63 0 1 0 0 5.25 2.63 2.63 0 0 0 0-5.25" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutGridCirclePlusRegularDuotone.displayName = 'LayoutGridCirclePlusRegularDuotone';

// Triple export pattern (lucide-react style)
export { LayoutGridCirclePlusRegularDuotone, LayoutGridCirclePlusRegularDuotone as LayoutGridCirclePlusRegularDuotoneIcon, LayoutGridCirclePlusRegularDuotone as SiLayoutGridCirclePlusRegularDuotone };
export default LayoutGridCirclePlusRegularDuotone;
export type { LayoutGridCirclePlusRegularDuotoneProps };
