import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WaveTriangleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveTriangleBoldDuotone = memo(
  forwardRef<SVGSVGElement, WaveTriangleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-triangle-bold-duotone" {...props}>
      <path fill="currentColor" d="M21.12 11.53a1 1 0 1 1 1.76.94l-3.9 7.33a2.25 2.25 0 0 1-3.97 0l-3.9-7.33 1.77-.94 3.9 7.33c.1.18.35.18.44 0z" opacity={.4} />
        <path fill="currentColor" d="M5.01 4.2A2.25 2.25 0 0 1 9 4.2l3.9 7.33-1.77.94-3.9-7.34a.25.25 0 0 0-.44 0l-3.9 7.34a1 1 0 1 1-1.76-.94z" />
    </IconBase>
  ))
);

WaveTriangleBoldDuotone.displayName = 'WaveTriangleBoldDuotone';

// Triple export pattern (lucide-react style)
export { WaveTriangleBoldDuotone, WaveTriangleBoldDuotone as WaveTriangleBoldDuotoneIcon, WaveTriangleBoldDuotone as SiWaveTriangleBoldDuotone };
export type { WaveTriangleBoldDuotoneProps };
