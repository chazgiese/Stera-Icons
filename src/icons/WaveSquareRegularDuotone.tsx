import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WaveSquareRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveSquareRegularDuotone = memo(
  forwardRef<SVGSVGElement, WaveSquareRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-square-duotone" {...props}>
      <path fill="currentColor" d="M22 11.25c.41 0 .75.34.75.75v6.75a2 2 0 0 1-2 2h-7.5a2 2 0 0 1-2-2V12h1.5v6.75c0 .28.22.5.5.5h7.5a.5.5 0 0 0 .5-.5V12c0-.41.34-.75.75-.75" opacity={.4} />
        <path fill="currentColor" d="M10.75 3.25a2 2 0 0 1 2 2V12h-1.5V5.25a.5.5 0 0 0-.5-.5h-7.5a.5.5 0 0 0-.5.5V12a.75.75 0 0 1-1.5 0V5.25c0-1.1.9-2 2-2z" />
    </IconBase>
  ))
);

WaveSquareRegularDuotone.displayName = 'WaveSquareRegularDuotone';

// Triple export pattern (lucide-react style)
export { WaveSquareRegularDuotone, WaveSquareRegularDuotone as WaveSquareRegularDuotoneIcon, WaveSquareRegularDuotone as SiWaveSquareRegularDuotone };
export default WaveSquareRegularDuotone;
export type { WaveSquareRegularDuotoneProps };
