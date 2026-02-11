import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSineFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveSineFillDuotone = memo(
  forwardRef<SVGSVGElement, WaveSineFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-sine-fill-duotone" {...props}>
      <path d="M7.5 3.5c1.79 0 3.13 1.26 4.01 2.66.92 1.45 1.59 3.4 1.97 5.58l-2.96.52c-.34-1.93-.9-3.48-1.54-4.5C8.3 6.7 7.75 6.5 7.5 6.5s-.8.2-1.48 1.26a13 13 0 0 0-1.54 4.5 1.5 1.5 0 0 1-2.96-.52A16 16 0 0 1 3.5 6.16C4.37 4.76 5.7 3.5 7.5 3.5" />
        <path d="M19.52 11.74a1.5 1.5 0 0 1 2.96.52 16 16 0 0 1-1.97 5.58c-.88 1.4-2.22 2.66-4.01 2.66s-3.13-1.26-4.01-2.66a16 16 0 0 1-1.97-5.58l2.96-.52c.34 1.93.9 3.48 1.54 4.5.68 1.07 1.23 1.26 1.48 1.26s.8-.2 1.48-1.26c.64-1.02 1.2-2.57 1.54-4.5" opacity={.4} />
    </IconBase>
  ))
);

WaveSineFillDuotone.displayName = 'WaveSineFillDuotone';

// Triple export pattern (lucide-react style)
export { WaveSineFillDuotone, WaveSineFillDuotone as WaveSineFillDuotoneIcon, WaveSineFillDuotone as SiWaveSineFillDuotone };
export default WaveSineFillDuotone;
export type { WaveSineFillDuotoneProps };
