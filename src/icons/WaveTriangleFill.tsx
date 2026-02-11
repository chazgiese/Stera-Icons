import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveTriangleFillProps = Omit<IconBaseProps, 'children'>;

const WaveTriangleFill = memo(
  forwardRef<SVGSVGElement, WaveTriangleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-triangle-fill" {...props}>
      <path d="M7.5 3.5c.51 0 .99.26 1.26.69l7.74 12.03 3.24-5.03a1.5 1.5 0 0 1 2.52 1.62l-4.5 7a1.5 1.5 0 0 1-2.41.15l-.11-.15L7.5 7.77l-3.24 5.04a1.5 1.5 0 0 1-2.52-1.62l4.5-7 .11-.16c.28-.33.7-.53 1.15-.53" />
    </IconBase>
  ))
);

WaveTriangleFill.displayName = 'WaveTriangleFill';

// Triple export pattern (lucide-react style)
export { WaveTriangleFill, WaveTriangleFill as WaveTriangleFillIcon, WaveTriangleFill as SiWaveTriangleFill };
export default WaveTriangleFill;
export type { WaveTriangleFillProps };
