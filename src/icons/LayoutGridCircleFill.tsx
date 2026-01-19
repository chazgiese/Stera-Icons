import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayoutGridCircleFillProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCircleFill = memo(
  forwardRef<SVGSVGElement, LayoutGridCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-grid-circle-fill" {...props}>
      <path fill="currentColor" d="M6.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M17.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M6.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M17.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9" />
    </IconBase>
  ))
);

LayoutGridCircleFill.displayName = 'LayoutGridCircleFill';

// Triple export pattern (lucide-react style)
export { LayoutGridCircleFill, LayoutGridCircleFill as LayoutGridCircleFillIcon, LayoutGridCircleFill as SiLayoutGridCircleFill };
export default LayoutGridCircleFill;
export type { LayoutGridCircleFillProps };
