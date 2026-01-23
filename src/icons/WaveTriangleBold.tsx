import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveTriangleBoldProps = Omit<IconBaseProps, 'children'>;

const WaveTriangleBold = memo(
  forwardRef<SVGSVGElement, WaveTriangleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-triangle-bold" {...props}>
      <path fill="currentColor" d="M5.01 4.2A2.25 2.25 0 0 1 9 4.2l7.79 14.66c.1.18.35.18.44 0l3.9-7.33a1 1 0 1 1 1.76.94l-3.9 7.33a2.25 2.25 0 0 1-3.97 0l-3.9-7.33v-.01L7.22 5.13a.25.25 0 0 0-.44 0l-3.9 7.34a1 1 0 1 1-1.76-.94z" />
    </IconBase>
  ))
);

WaveTriangleBold.displayName = 'WaveTriangleBold';

// Triple export pattern (lucide-react style)
export { WaveTriangleBold, WaveTriangleBold as WaveTriangleBoldIcon, WaveTriangleBold as SiWaveTriangleBold };
export default WaveTriangleBold;
export type { WaveTriangleBoldProps };
