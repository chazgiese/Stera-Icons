import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSineRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveSineRegularDuotone = memo(
  forwardRef<SVGSVGElement, WaveSineRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-sine-duotone" {...props}>
      <path d="M7.5 4.25c1.4 0 2.54.99 3.38 2.31.85 1.35 1.49 3.2 1.86 5.31l-1.48.26c-.35-2-.94-3.64-1.65-4.77-.73-1.15-1.48-1.61-2.11-1.61s-1.38.46-2.11 1.61a14 14 0 0 0-1.65 4.77.75.75 0 0 1-1.48-.26 15 15 0 0 1 1.86-5.3C4.95 5.23 6.1 4.24 7.5 4.24" />
        <path d="M20.26 11.87a.75.75 0 0 1 1.48.26 15 15 0 0 1-1.86 5.31c-.84 1.32-1.98 2.31-3.38 2.31s-2.54-.99-3.38-2.31a15 15 0 0 1-1.86-5.3l1.48-.27c.35 2 .94 3.64 1.65 4.77.73 1.15 1.48 1.61 2.11 1.61s1.38-.46 2.1-1.61c.72-1.13 1.31-2.78 1.66-4.77" opacity={.4} />
    </IconBase>
  ))
);

WaveSineRegularDuotone.displayName = 'WaveSineRegularDuotone';

// Triple export pattern (lucide-react style)
export { WaveSineRegularDuotone, WaveSineRegularDuotone as WaveSineRegularDuotoneIcon, WaveSineRegularDuotone as SiWaveSineRegularDuotone };
export default WaveSineRegularDuotone;
export type { WaveSineRegularDuotoneProps };
