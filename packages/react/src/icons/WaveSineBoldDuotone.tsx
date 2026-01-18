import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WaveSineBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveSineBoldDuotone = memo(
  forwardRef<SVGSVGElement, WaveSineBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21.01 11.83a1 1 0 1 1 1.98.34 18 18 0 0 1-2.09 6.11C19.97 19.8 18.66 21 17 21s-2.97-1.2-3.9-2.72A18 18 0 0 1 11 12.17l1.98-.34a16 16 0 0 0 1.81 5.4C15.6 18.56 16.4 19 17 19s1.4-.45 2.2-1.76a16 16 0 0 0 1.81-5.4" opacity={.4} />
        <path fill="currentColor" d="M7 3c1.66 0 2.97 1.2 3.9 2.72A18 18 0 0 1 13 11.83l-1.98.34a16 16 0 0 0-1.81-5.4C8.4 5.44 7.6 5 7 5s-1.4.45-2.2 1.76A16 16 0 0 0 3 12.16 1 1 0 1 1 1 11.84 18 18 0 0 1 3.1 5.72C4.03 4.2 5.34 3 7 3" />
    </IconBase>
  ))
);

WaveSineBoldDuotone.displayName = 'WaveSineBoldDuotone';

export { WaveSineBoldDuotone };
export type { WaveSineBoldDuotoneProps };
