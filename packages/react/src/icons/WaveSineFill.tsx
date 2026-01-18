import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WaveSineFillProps = Omit<IconBaseProps, 'children'>;

const WaveSineFill = memo(
  forwardRef<SVGSVGElement, WaveSineFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7 2.5c1.92 0 3.36 1.39 4.33 2.96a18 18 0 0 1 2.15 6.29 15 15 0 0 0 1.75 5.22C16 18.23 16.66 18.5 17 18.5s1-.27 1.77-1.53c.74-1.2 1.37-3 1.75-5.22a1.5 1.5 0 0 1 2.96.5 18 18 0 0 1-2.15 6.3c-.97 1.56-2.41 2.95-4.33 2.95s-3.36-1.39-4.33-2.96a18 18 0 0 1-2.15-6.29 15 15 0 0 0-1.75-5.22C8 5.77 7.34 5.5 7 5.5s-1 .27-1.77 1.53c-.74 1.2-1.37 3-1.75 5.22a1.5 1.5 0 0 1-2.96-.5 18 18 0 0 1 2.15-6.3C3.64 3.9 5.08 2.5 7 2.5" />
    </IconBase>
  ))
);

WaveSineFill.displayName = 'WaveSineFill';

// Triple export pattern (lucide-react style)
export { WaveSineFill, WaveSineFill as WaveSineFillIcon, WaveSineFill as SiWaveSineFill };
export type { WaveSineFillProps };
