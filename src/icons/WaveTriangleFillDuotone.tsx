import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveTriangleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveTriangleFillDuotone = memo(
  forwardRef<SVGSVGElement, WaveTriangleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-triangle-fill-duotone" {...props}>
      <path d="M19.74 11.19a1.5 1.5 0 0 1 2.52 1.62l-4.5 7a1.5 1.5 0 0 1-2.4.15l-.12-.15-4.5-7 2.52-1.62 3.24 5.03z" opacity={.4} />
        <path d="M7.5 3.5c.51 0 .99.26 1.26.69l4.5 7-2.52 1.62L7.5 7.77l-3.24 5.04a1.5 1.5 0 0 1-2.52-1.62l4.5-7 .11-.16c.28-.33.7-.53 1.15-.53" />
    </IconBase>
  ))
);

WaveTriangleFillDuotone.displayName = 'WaveTriangleFillDuotone';

// Triple export pattern (lucide-react style)
export { WaveTriangleFillDuotone, WaveTriangleFillDuotone as WaveTriangleFillDuotoneIcon, WaveTriangleFillDuotone as SiWaveTriangleFillDuotone };
export default WaveTriangleFillDuotone;
export type { WaveTriangleFillDuotoneProps };
