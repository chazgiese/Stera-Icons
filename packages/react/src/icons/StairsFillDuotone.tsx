import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StairsFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const StairsFillDuotone = memo(
  forwardRef<SVGSVGElement, StairsFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2 16.83c0 .83.67 1.5 1.5 1.5H5v4.17a1.5 1.5 0 0 1-3 0zM10.19 8.67h-.02a1.5 1.5 0 1 0 0 3h1.5v5.16c0 .83-.67 1.5-1.5 1.5h-.02.02a1.5 1.5 0 0 0 0-3h-1.5v-5.16c0-.83.67-1.5 1.5-1.5zM15.33 3.5c0 .83.67 1.5 1.5 1.5h1.5v5.15a1.5 1.5 0 0 0-1.5-1.48h-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M10.17 15.33a1.5 1.5 0 0 1 0 3H3.5a1.5 1.5 0 1 1 0-3zM16.83 8.67a1.5 1.5 0 0 1 0 3h-6.66a1.5 1.5 0 0 1 0-3zM22.5 2a1.5 1.5 0 0 1 0 3h-5.67a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

StairsFillDuotone.displayName = 'StairsFillDuotone';

// Triple export pattern (lucide-react style)
export { StairsFillDuotone, StairsFillDuotone as StairsFillDuotoneIcon, StairsFillDuotone as SiStairsFillDuotone };
export type { StairsFillDuotoneProps };
