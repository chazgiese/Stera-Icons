import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveTriangleBoldProps = Omit<IconBaseProps, 'children'>;

const WaveTriangleBold = memo(
  forwardRef<SVGSVGElement, WaveTriangleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-triangle-bold" {...props}>
      <path fill="currentColor" d="M7.5 4a1 1 0 0 1 .84.46l8.16 12.69 3.66-5.7a1 1 0 0 1 1.68 1.09l-4.5 7a1 1 0 0 1-1.6.1l-.08-.1L7.5 6.84l-3.66 5.7a1 1 0 0 1-1.68-1.08l4.5-7 .07-.1A1 1 0 0 1 7.5 4" />
    </IconBase>
  ))
);

WaveTriangleBold.displayName = 'WaveTriangleBold';

// Triple export pattern (lucide-react style)
export { WaveTriangleBold, WaveTriangleBold as WaveTriangleBoldIcon, WaveTriangleBold as SiWaveTriangleBold };
export default WaveTriangleBold;
export type { WaveTriangleBoldProps };
