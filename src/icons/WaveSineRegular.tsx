import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSineRegularProps = Omit<IconBaseProps, 'children'>;

const WaveSineRegular = memo(
  forwardRef<SVGSVGElement, WaveSineRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-sine" {...props}>
      <path fill="currentColor" d="M7.5 4.25c1.4 0 2.55.99 3.38 2.31.85 1.35 1.49 3.2 1.86 5.31l.14.73c.36 1.67.89 3.05 1.51 4.04.73 1.15 1.48 1.61 2.11 1.61s1.38-.46 2.11-1.61c.71-1.13 1.3-2.78 1.65-4.77a.75.75 0 0 1 1.48.26 15 15 0 0 1-1.86 5.3c-.83 1.33-1.98 2.32-3.38 2.32s-2.54-.99-3.38-2.31a14 14 0 0 1-1.7-4.53l-.16-.78c-.35-2-.94-3.64-1.65-4.77-.73-1.15-1.48-1.61-2.11-1.61s-1.38.46-2.1 1.61a14 14 0 0 0-1.66 4.77.75.75 0 0 1-1.48-.26 15 15 0 0 1 1.86-5.3C4.96 5.23 6.1 4.24 7.5 4.24" />
    </IconBase>
  ))
);

WaveSineRegular.displayName = 'WaveSineRegular';

// Triple export pattern (lucide-react style)
export { WaveSineRegular, WaveSineRegular as WaveSineRegularIcon, WaveSineRegular as SiWaveSineRegular };
export default WaveSineRegular;
export type { WaveSineRegularProps };
