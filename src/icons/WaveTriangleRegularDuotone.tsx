import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveTriangleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveTriangleRegularDuotone = memo(
  forwardRef<SVGSVGElement, WaveTriangleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-triangle-duotone" {...props}>
      <path d="M20.37 11.6a.75.75 0 0 1 1.26.8l-4.5 7a.75.75 0 0 1-1.2.08l-.06-.08-4.5-7 1.26-.8 3.87 6.01z" opacity={.4} />
        <path d="M7.5 4.25c.26 0 .5.13.63.34l4.5 7-1.26.81L7.5 6.38 3.63 12.4a.75.75 0 0 1-1.26-.8l4.5-7 .06-.08a.8.8 0 0 1 .57-.27" />
    </IconBase>
  ))
);

WaveTriangleRegularDuotone.displayName = 'WaveTriangleRegularDuotone';

// Triple export pattern (lucide-react style)
export { WaveTriangleRegularDuotone, WaveTriangleRegularDuotone as WaveTriangleRegularDuotoneIcon, WaveTriangleRegularDuotone as SiWaveTriangleRegularDuotone };
export default WaveTriangleRegularDuotone;
export type { WaveTriangleRegularDuotoneProps };
