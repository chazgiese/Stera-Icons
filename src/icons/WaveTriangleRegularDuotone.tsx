import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WaveTriangleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveTriangleRegularDuotone = memo(
  forwardRef<SVGSVGElement, WaveTriangleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-triangle-duotone" {...props}>
      <path fill="currentColor" d="M21.34 11.65a.75.75 0 1 1 1.32.7l-3.9 7.33a2 2 0 0 1-3.53 0l-3.9-7.33 1.33-.7 3.9 7.33c.19.35.7.35.88 0z" opacity={.4} />
        <path fill="currentColor" d="M5.23 4.31a2 2 0 0 1 3.54 0l3.9 7.34-1.33.7-3.9-7.33a.5.5 0 0 0-.88 0l-3.9 7.33a.75.75 0 1 1-1.32-.7z" />
    </IconBase>
  ))
);

WaveTriangleRegularDuotone.displayName = 'WaveTriangleRegularDuotone';

// Triple export pattern (lucide-react style)
export { WaveTriangleRegularDuotone, WaveTriangleRegularDuotone as WaveTriangleRegularDuotoneIcon, WaveTriangleRegularDuotone as SiWaveTriangleRegularDuotone };
export type { WaveTriangleRegularDuotoneProps };
