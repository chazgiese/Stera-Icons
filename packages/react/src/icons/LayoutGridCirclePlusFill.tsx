import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayoutGridCirclePlusFillProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCirclePlusFill = memo(
  forwardRef<SVGSVGElement, LayoutGridCirclePlusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M6.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M17.5 13a1 1 0 0 1 1 1v2.5H21a1 1 0 1 1 0 2h-2.5V21a1 1 0 1 1-2 0v-2.5H14a1 1 0 1 1 0-2h2.5V14a1 1 0 0 1 1-1M6.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M17.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9" />
    </IconBase>
  ))
);

LayoutGridCirclePlusFill.displayName = 'LayoutGridCirclePlusFill';

// Triple export pattern (lucide-react style)
export { LayoutGridCirclePlusFill, LayoutGridCirclePlusFill as LayoutGridCirclePlusFillIcon, LayoutGridCirclePlusFill as SiLayoutGridCirclePlusFill };
export type { LayoutGridCirclePlusFillProps };
