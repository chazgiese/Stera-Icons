import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayoutGridCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, LayoutGridCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 13.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M17.5 2.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M17.5 13.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M6.5 2.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutGridCircleRegularDuotone.displayName = 'LayoutGridCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { LayoutGridCircleRegularDuotone, LayoutGridCircleRegularDuotone as LayoutGridCircleRegularDuotoneIcon, LayoutGridCircleRegularDuotone as SiLayoutGridCircleRegularDuotone };
export type { LayoutGridCircleRegularDuotoneProps };
