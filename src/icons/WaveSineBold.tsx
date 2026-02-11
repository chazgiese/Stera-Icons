import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSineBoldProps = Omit<IconBaseProps, 'children'>;

const WaveSineBold = memo(
  forwardRef<SVGSVGElement, WaveSineBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-sine-bold" {...props}>
      <path d="M7.5 4c1.53 0 2.74 1.08 3.59 2.43a15 15 0 0 1 1.9 5.4l.14.72c.35 1.64.87 3 1.47 3.96.71 1.12 1.4 1.49 1.9 1.49s1.19-.37 1.9-1.5c.69-1.09 1.27-2.7 1.62-4.67a1 1 0 0 1 1.97.34 15 15 0 0 1-1.9 5.4C19.24 18.92 18.03 20 16.5 20s-2.74-1.08-3.59-2.43c-.76-1.2-1.36-2.8-1.74-4.6l-.15-.8A13 13 0 0 0 9.4 7.5C8.69 6.37 8 6 7.5 6s-1.19.37-1.9 1.5C4.91 8.58 4.33 10.2 4 12.16a1 1 0 0 1-1.97-.34 15 15 0 0 1 1.9-5.4C4.75 5.08 5.96 4 7.5 4" />
    </IconBase>
  ))
);

WaveSineBold.displayName = 'WaveSineBold';

// Triple export pattern (lucide-react style)
export { WaveSineBold, WaveSineBold as WaveSineBoldIcon, WaveSineBold as SiWaveSineBold };
export default WaveSineBold;
export type { WaveSineBoldProps };
