import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSineBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveSineBoldDuotone = memo(
  forwardRef<SVGSVGElement, WaveSineBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-sine-bold-duotone" {...props}>
      <path fill="currentColor" d="M7.5 4c1.53 0 2.74 1.08 3.59 2.43a15 15 0 0 1 1.9 5.4l-1.98.34A13 13 0 0 0 9.4 7.5C8.69 6.37 8 6 7.5 6s-1.19.37-1.9 1.5C4.91 8.58 4.33 10.2 4 12.16A1 1 0 0 1 2 11.83a15 15 0 0 1 1.9-5.4C4.76 5.08 5.97 4 7.5 4" />
        <path fill="currentColor" d="M20.01 11.83a1 1 0 0 1 1.98.34 15 15 0 0 1-1.9 5.4C19.24 18.92 18.03 20 16.5 20s-2.74-1.08-3.59-2.43a15 15 0 0 1-1.9-5.4l1.98-.34c.34 1.97.92 3.58 1.61 4.68.71 1.12 1.4 1.49 1.9 1.49s1.19-.37 1.9-1.5c.69-1.09 1.27-2.7 1.61-4.67" opacity={.4} />
    </IconBase>
  ))
);

WaveSineBoldDuotone.displayName = 'WaveSineBoldDuotone';

// Triple export pattern (lucide-react style)
export { WaveSineBoldDuotone, WaveSineBoldDuotone as WaveSineBoldDuotoneIcon, WaveSineBoldDuotone as SiWaveSineBoldDuotone };
export default WaveSineBoldDuotone;
export type { WaveSineBoldDuotoneProps };
