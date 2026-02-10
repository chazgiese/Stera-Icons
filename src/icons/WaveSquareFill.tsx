import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSquareFillProps = Omit<IconBaseProps, 'children'>;

const WaveSquareFill = memo(
  forwardRef<SVGSVGElement, WaveSquareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-square-fill" {...props}>
      <path fill="currentColor" d="M10.75 3.5a2.75 2.75 0 0 1 2.75 2.75V17.5h6V12a1.5 1.5 0 0 1 3 0v5.75a2.75 2.75 0 0 1-2.75 2.75h-6.5a2.75 2.75 0 0 1-2.75-2.75V6.5h-6V12a1.5 1.5 0 0 1-3 0V6.25A2.75 2.75 0 0 1 4.25 3.5z" />
    </IconBase>
  ))
);

WaveSquareFill.displayName = 'WaveSquareFill';

// Triple export pattern (lucide-react style)
export { WaveSquareFill, WaveSquareFill as WaveSquareFillIcon, WaveSquareFill as SiWaveSquareFill };
export default WaveSquareFill;
export type { WaveSquareFillProps };
