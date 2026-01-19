import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WaveSineBoldProps = Omit<IconBaseProps, 'children'>;

const WaveSineBold = memo(
  forwardRef<SVGSVGElement, WaveSineBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-sine-bold" {...props}>
      <path fill="currentColor" d="M7 3c1.66 0 2.97 1.2 3.9 2.72A18 18 0 0 1 13 11.83l.07.42c.4 2.08 1.01 3.8 1.74 4.99.8 1.3 1.6 1.76 2.2 1.76s1.4-.45 2.2-1.76a16 16 0 0 0 1.81-5.4 1 1 0 1 1 1.98.33 18 18 0 0 1-2.09 6.11C19.97 19.8 18.66 21 17 21s-2.97-1.2-3.9-2.72a17 17 0 0 1-2-5.66l-.09-.45a16 16 0 0 0-1.81-5.4C8.4 5.44 7.6 5 7 5s-1.4.45-2.2 1.76A16 16 0 0 0 3 12.16 1 1 0 1 1 1 11.84 18 18 0 0 1 3.1 5.72C4.03 4.2 5.34 3 7 3" />
    </IconBase>
  ))
);

WaveSineBold.displayName = 'WaveSineBold';

// Triple export pattern (lucide-react style)
export { WaveSineBold, WaveSineBold as WaveSineBoldIcon, WaveSineBold as SiWaveSineBold };
export type { WaveSineBoldProps };
