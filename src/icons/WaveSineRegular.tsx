import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSineRegularProps = Omit<IconBaseProps, 'children'>;

const WaveSineRegular = memo(
  forwardRef<SVGSVGElement, WaveSineRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-sine" {...props}>
      <path fill="currentColor" d="M7 3.25c1.53 0 2.77 1.1 3.69 2.6a17 17 0 0 1 2.05 6.02 16 16 0 0 0 1.85 5.5c.82 1.33 1.67 1.88 2.41 1.88s1.59-.55 2.4-1.88c.81-1.3 1.47-3.21 1.86-5.5a.75.75 0 1 1 1.48.26c-.41 2.4-1.12 4.5-2.05 6.02-.92 1.5-2.16 2.6-3.69 2.6s-2.77-1.1-3.69-2.6a17 17 0 0 1-2.05-6.02 16 16 0 0 0-1.85-5.5C8.59 5.3 7.74 4.75 7 4.75s-1.59.55-2.4 1.88a16 16 0 0 0-1.86 5.5.75.75 0 0 1-1.48-.26c.41-2.4 1.12-4.5 2.05-6.02.92-1.5 2.16-2.6 3.69-2.6" />
    </IconBase>
  ))
);

WaveSineRegular.displayName = 'WaveSineRegular';

// Triple export pattern (lucide-react style)
export { WaveSineRegular, WaveSineRegular as WaveSineRegularIcon, WaveSineRegular as SiWaveSineRegular };
export default WaveSineRegular;
export type { WaveSineRegularProps };
