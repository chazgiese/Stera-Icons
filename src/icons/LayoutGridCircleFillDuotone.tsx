import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutGridCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, LayoutGridCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-grid-circle-fill-duotone" {...props}>
      <path d="M6.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M17.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9" opacity={0.4} />
        <path fill="currentColor" d="M17.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M6.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9" />
    </IconBase>
  ))
);

LayoutGridCircleFillDuotone.displayName = 'LayoutGridCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { LayoutGridCircleFillDuotone, LayoutGridCircleFillDuotone as LayoutGridCircleFillDuotoneIcon, LayoutGridCircleFillDuotone as SiLayoutGridCircleFillDuotone };
export default LayoutGridCircleFillDuotone;
export type { LayoutGridCircleFillDuotoneProps };
