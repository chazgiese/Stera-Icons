import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSquareRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveSquareRegularDuotone = memo(
  forwardRef<SVGSVGElement, WaveSquareRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-square-duotone" {...props}>
      <path fill="currentColor" d="M21 11.25c.41 0 .75.34.75.75v5.75a2 2 0 0 1-2 2h-6.5a2 2 0 0 1-2-2V12h1.5v5.75c0 .28.22.5.5.5h6.5a.5.5 0 0 0 .5-.5V12c0-.41.34-.75.75-.75" opacity={.4} />
        <path fill="currentColor" d="M10.75 4.25a2 2 0 0 1 2 2V12h-1.5V6.25a.5.5 0 0 0-.5-.5h-6.5a.5.5 0 0 0-.5.5V12a.75.75 0 0 1-1.5 0V6.25c0-1.1.9-2 2-2z" />
    </IconBase>
  ))
);

WaveSquareRegularDuotone.displayName = 'WaveSquareRegularDuotone';

// Triple export pattern (lucide-react style)
export { WaveSquareRegularDuotone, WaveSquareRegularDuotone as WaveSquareRegularDuotoneIcon, WaveSquareRegularDuotone as SiWaveSquareRegularDuotone };
export default WaveSquareRegularDuotone;
export type { WaveSquareRegularDuotoneProps };
