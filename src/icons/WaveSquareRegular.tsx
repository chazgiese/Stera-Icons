import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSquareRegularProps = Omit<IconBaseProps, 'children'>;

const WaveSquareRegular = memo(
  forwardRef<SVGSVGElement, WaveSquareRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-square" {...props}>
      <path d="M10.75 4.25a2 2 0 0 1 2 2v11.5c0 .28.22.5.5.5h6.5a.5.5 0 0 0 .5-.5V12a.75.75 0 0 1 1.5 0v5.75a2 2 0 0 1-2 2h-6.5a2 2 0 0 1-2-2V6.25a.5.5 0 0 0-.5-.5h-6.5a.5.5 0 0 0-.5.5V12a.75.75 0 0 1-1.5 0V6.25c0-1.1.9-2 2-2z" />
    </IconBase>
  ))
);

WaveSquareRegular.displayName = 'WaveSquareRegular';

// Triple export pattern (lucide-react style)
export { WaveSquareRegular, WaveSquareRegular as WaveSquareRegularIcon, WaveSquareRegular as SiWaveSquareRegular };
export default WaveSquareRegular;
export type { WaveSquareRegularProps };
