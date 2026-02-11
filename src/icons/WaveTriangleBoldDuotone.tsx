import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveTriangleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveTriangleBoldDuotone = memo(
  forwardRef<SVGSVGElement, WaveTriangleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-triangle-bold-duotone" {...props}>
      <path d="M20.16 11.46a1 1 0 0 1 1.68 1.08l-4.5 7a1 1 0 0 1-1.6.1l-.08-.1-4.5-7 1.68-1.08 3.66 5.69z" opacity={.4} />
        <path d="M7.5 4a1 1 0 0 1 .84.46l4.5 7-1.68 1.08-3.66-5.7-3.66 5.7a1 1 0 0 1-1.68-1.08l4.5-7 .07-.1A1 1 0 0 1 7.5 4" />
    </IconBase>
  ))
);

WaveTriangleBoldDuotone.displayName = 'WaveTriangleBoldDuotone';

// Triple export pattern (lucide-react style)
export { WaveTriangleBoldDuotone, WaveTriangleBoldDuotone as WaveTriangleBoldDuotoneIcon, WaveTriangleBoldDuotone as SiWaveTriangleBoldDuotone };
export default WaveTriangleBoldDuotone;
export type { WaveTriangleBoldDuotoneProps };
