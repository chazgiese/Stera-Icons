import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutGridCircleFillProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCircleFill = memo(
  forwardRef<SVGSVGElement, LayoutGridCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-grid-circle-fill" {...props}>
      <path d="M6.88 12.88a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5M17.13 12.88a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5M6.88 2.63a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5M17.13 2.63a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5" />
    </IconBase>
  ))
);

LayoutGridCircleFill.displayName = 'LayoutGridCircleFill';

// Triple export pattern (lucide-react style)
export { LayoutGridCircleFill, LayoutGridCircleFill as LayoutGridCircleFillIcon, LayoutGridCircleFill as SiLayoutGridCircleFill };
export default LayoutGridCircleFill;
export type { LayoutGridCircleFillProps };
