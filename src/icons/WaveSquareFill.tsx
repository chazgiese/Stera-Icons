import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WaveSquareFillProps = Omit<IconBaseProps, 'children'>;

const WaveSquareFill = memo(
  forwardRef<SVGSVGElement, WaveSquareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-square-fill" {...props}>
      <path fill="currentColor" d="M10.75 2.5a2.75 2.75 0 0 1 2.75 2.75V18.5h7V12a1.5 1.5 0 0 1 3 0v6.75a2.75 2.75 0 0 1-2.75 2.75h-7.5a2.75 2.75 0 0 1-2.75-2.75V5.5h-7V12a1.5 1.5 0 0 1-3 0V5.25A2.75 2.75 0 0 1 3.25 2.5z" />
    </IconBase>
  ))
);

WaveSquareFill.displayName = 'WaveSquareFill';

// Triple export pattern (lucide-react style)
export { WaveSquareFill, WaveSquareFill as WaveSquareFillIcon, WaveSquareFill as SiWaveSquareFill };
export default WaveSquareFill;
export type { WaveSquareFillProps };
