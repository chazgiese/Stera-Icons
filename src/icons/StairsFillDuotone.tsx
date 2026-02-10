import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StairsFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const StairsFillDuotone = memo(
  forwardRef<SVGSVGElement, StairsFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="stairs-fill-duotone" {...props}>
      <path d="M3 16.5c0 .83.67 1.5 1.5 1.5H6v3.5a1.5 1.5 0 0 1-3 0zM9 10.5c0 .83.67 1.5 1.5 1.5H12v4.5c0-.83-.67-1.5-1.5-1.5H9zM15 4.5c0 .83.67 1.5 1.5 1.5H18v4.5c0-.83-.67-1.5-1.5-1.5H15z" opacity={0.4} />
        <path fill="currentColor" d="M10.5 15a1.5 1.5 0 0 1 0 3h-6a1.5 1.5 0 0 1 0-3zM16.5 9a1.5 1.5 0 0 1 0 3h-6a1.5 1.5 0 0 1 0-3zM21.5 3a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

StairsFillDuotone.displayName = 'StairsFillDuotone';

// Triple export pattern (lucide-react style)
export { StairsFillDuotone, StairsFillDuotone as StairsFillDuotoneIcon, StairsFillDuotone as SiStairsFillDuotone };
export default StairsFillDuotone;
export type { StairsFillDuotoneProps };
