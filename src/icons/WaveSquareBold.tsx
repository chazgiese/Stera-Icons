import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WaveSquareBoldProps = Omit<IconBaseProps, 'children'>;

const WaveSquareBold = memo(
  forwardRef<SVGSVGElement, WaveSquareBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-square-bold" {...props}>
      <path fill="currentColor" d="M10.75 3C11.99 3 13 4 13 5.25v13.5q.02.23.25.25h7.5q.23-.02.25-.25V12a1 1 0 1 1 2 0v6.75c0 1.24-1 2.25-2.25 2.25h-7.5C12.01 21 11 20 11 18.75V5.25a.25.25 0 0 0-.25-.25h-7.5a.25.25 0 0 0-.25.25V12a1 1 0 0 1-2 0V5.25C1 4.01 2 3 3.25 3z" />
    </IconBase>
  ))
);

WaveSquareBold.displayName = 'WaveSquareBold';

// Triple export pattern (lucide-react style)
export { WaveSquareBold, WaveSquareBold as WaveSquareBoldIcon, WaveSquareBold as SiWaveSquareBold };
export type { WaveSquareBoldProps };
