import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, WaveSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-square-fill-duotone" {...props}>
      <path fill="currentColor" d="M21 10.5c.83 0 1.5.67 1.5 1.5v5.75a2.75 2.75 0 0 1-2.75 2.75h-6.5a2.75 2.75 0 0 1-2.75-2.75V12h3v5.5h6V12c0-.83.67-1.5 1.5-1.5" opacity={.4} />
        <path fill="currentColor" d="M10.75 3.5a2.75 2.75 0 0 1 2.75 2.75V12h-3V6.5h-6V12a1.5 1.5 0 0 1-3 0V6.25A2.75 2.75 0 0 1 4.25 3.5z" />
    </IconBase>
  ))
);

WaveSquareFillDuotone.displayName = 'WaveSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { WaveSquareFillDuotone, WaveSquareFillDuotone as WaveSquareFillDuotoneIcon, WaveSquareFillDuotone as SiWaveSquareFillDuotone };
export default WaveSquareFillDuotone;
export type { WaveSquareFillDuotoneProps };
