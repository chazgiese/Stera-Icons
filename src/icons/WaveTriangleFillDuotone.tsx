import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WaveTriangleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveTriangleFillDuotone = memo(
  forwardRef<SVGSVGElement, WaveTriangleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-triangle-fill-duotone" {...props}>
      <path fill="currentColor" d="M20.68 11.3a1.5 1.5 0 0 1 2.64 1.4l-3.9 7.34-.1.17a2.75 2.75 0 0 1-4.65 0l-.1-.17-3.9-7.34 2.65-1.4L17 18.2z" opacity={.4} />
        <path fill="currentColor" d="M4.67 3.78a2.75 2.75 0 0 1 4.66 0l.1.18 3.9 7.34-2.65 1.4L7 5.78 3.33 12.7a1.5 1.5 0 0 1-2.65-1.4l3.9-7.34z" />
    </IconBase>
  ))
);

WaveTriangleFillDuotone.displayName = 'WaveTriangleFillDuotone';

// Triple export pattern (lucide-react style)
export { WaveTriangleFillDuotone, WaveTriangleFillDuotone as WaveTriangleFillDuotoneIcon, WaveTriangleFillDuotone as SiWaveTriangleFillDuotone };
export type { WaveTriangleFillDuotoneProps };
