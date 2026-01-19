import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WaveSquareRegularProps = Omit<IconBaseProps, 'children'>;

const WaveSquareRegular = memo(
  forwardRef<SVGSVGElement, WaveSquareRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-square" {...props}>
      <path fill="currentColor" d="M10.75 3.25a2 2 0 0 1 2 2v13.5c0 .28.22.5.5.5h7.5a.5.5 0 0 0 .5-.5V12a.75.75 0 0 1 1.5 0v6.75a2 2 0 0 1-2 2h-7.5a2 2 0 0 1-2-2V5.25a.5.5 0 0 0-.5-.5h-7.5a.5.5 0 0 0-.5.5V12a.75.75 0 0 1-1.5 0V5.25c0-1.1.9-2 2-2z" />
    </IconBase>
  ))
);

WaveSquareRegular.displayName = 'WaveSquareRegular';

// Triple export pattern (lucide-react style)
export { WaveSquareRegular, WaveSquareRegular as WaveSquareRegularIcon, WaveSquareRegular as SiWaveSquareRegular };
export type { WaveSquareRegularProps };
