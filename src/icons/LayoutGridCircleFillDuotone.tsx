import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutGridCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, LayoutGridCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-grid-circle-fill-duotone" {...props}>
      <path d="M6.88 12.88a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5M17.13 2.63a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5" opacity={0.4} />
        <path fill="currentColor" d="M17.13 12.88a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5M6.88 2.63a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5" />
    </IconBase>
  ))
);

LayoutGridCircleFillDuotone.displayName = 'LayoutGridCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { LayoutGridCircleFillDuotone, LayoutGridCircleFillDuotone as LayoutGridCircleFillDuotoneIcon, LayoutGridCircleFillDuotone as SiLayoutGridCircleFillDuotone };
export default LayoutGridCircleFillDuotone;
export type { LayoutGridCircleFillDuotoneProps };
