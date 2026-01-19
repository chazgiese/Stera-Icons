import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WaveTriangleFillProps = Omit<IconBaseProps, 'children'>;

const WaveTriangleFill = memo(
  forwardRef<SVGSVGElement, WaveTriangleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-triangle-fill" {...props}>
      <path fill="currentColor" d="M4.67 3.78a2.75 2.75 0 0 1 4.66 0l.1.18 3.9 7.34L17 18.22l3.68-6.91a1.5 1.5 0 0 1 2.64 1.4l-3.9 7.34-.1.17a2.75 2.75 0 0 1-4.65 0l-.1-.17-3.9-7.33L7 5.77 3.33 12.7a1.5 1.5 0 0 1-2.65-1.4l3.9-7.34z" />
    </IconBase>
  ))
);

WaveTriangleFill.displayName = 'WaveTriangleFill';

// Triple export pattern (lucide-react style)
export { WaveTriangleFill, WaveTriangleFill as WaveTriangleFillIcon, WaveTriangleFill as SiWaveTriangleFill };
export default WaveTriangleFill;
export type { WaveTriangleFillProps };
