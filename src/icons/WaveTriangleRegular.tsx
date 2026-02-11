import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveTriangleRegularProps = Omit<IconBaseProps, 'children'>;

const WaveTriangleRegular = memo(
  forwardRef<SVGSVGElement, WaveTriangleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-triangle" {...props}>
      <path d="M7.5 4.25c.26 0 .5.13.63.34l8.37 13.02 3.87-6.02a.75.75 0 0 1 1.26.81l-4.5 7a.75.75 0 0 1-1.2.08l-.06-.08L7.5 6.38 3.63 12.4a.75.75 0 0 1-1.26-.8l4.5-7 .06-.08a.8.8 0 0 1 .57-.27" />
    </IconBase>
  ))
);

WaveTriangleRegular.displayName = 'WaveTriangleRegular';

// Triple export pattern (lucide-react style)
export { WaveTriangleRegular, WaveTriangleRegular as WaveTriangleRegularIcon, WaveTriangleRegular as SiWaveTriangleRegular };
export default WaveTriangleRegular;
export type { WaveTriangleRegularProps };
