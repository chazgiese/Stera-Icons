import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WaveTriangleRegularProps = Omit<IconBaseProps, 'children'>;

const WaveTriangleRegular = memo(
  forwardRef<SVGSVGElement, WaveTriangleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5.23 4.31a2 2 0 0 1 3.54 0l7.79 14.67c.19.35.7.35.88 0l3.9-7.33a.75.75 0 0 1 1.32.7l-3.9 7.33a2 2 0 0 1-3.53 0L7.44 5.02a.5.5 0 0 0-.88 0l-3.9 7.33a.75.75 0 1 1-1.32-.7z" />
    </IconBase>
  ))
);

WaveTriangleRegular.displayName = 'WaveTriangleRegular';

export { WaveTriangleRegular };
export type { WaveTriangleRegularProps };
