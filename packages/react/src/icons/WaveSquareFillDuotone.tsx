import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WaveSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, WaveSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M22 10.5c.83 0 1.5.67 1.5 1.5v6.75a2.75 2.75 0 0 1-2.75 2.75h-7.5a2.75 2.75 0 0 1-2.75-2.75V12h3v6.5h7V12c0-.83.67-1.5 1.5-1.5" opacity={.4} />
        <path fill="currentColor" d="M10.75 2.5a2.75 2.75 0 0 1 2.75 2.75V12h-3V5.5h-7V12a1.5 1.5 0 0 1-3 0V5.25A2.75 2.75 0 0 1 3.25 2.5z" />
    </IconBase>
  ))
);

WaveSquareFillDuotone.displayName = 'WaveSquareFillDuotone';

export { WaveSquareFillDuotone };
export type { WaveSquareFillDuotoneProps };
