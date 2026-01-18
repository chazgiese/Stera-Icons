import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayoutGridCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, LayoutGridCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M17.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M17.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M6.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutGridCircleBoldDuotone.displayName = 'LayoutGridCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { LayoutGridCircleBoldDuotone, LayoutGridCircleBoldDuotone as LayoutGridCircleBoldDuotoneIcon, LayoutGridCircleBoldDuotone as SiLayoutGridCircleBoldDuotone };
export type { LayoutGridCircleBoldDuotoneProps };
