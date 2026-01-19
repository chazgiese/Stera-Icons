import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WaveSquareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveSquareBoldDuotone = memo(
  forwardRef<SVGSVGElement, WaveSquareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-square-bold-duotone" {...props}>
      <path fill="currentColor" d="M22 11a1 1 0 0 1 1 1v6.75c0 1.24-1 2.25-2.25 2.25h-7.5C12.01 21 11 20 11 18.75V12h2v6.75q.02.23.25.25h7.5q.23-.02.25-.25V12a1 1 0 0 1 1-1" opacity={.4} />
        <path fill="currentColor" d="M10.75 3C11.99 3 13 4 13 5.25V12h-2V5.25a.25.25 0 0 0-.25-.25h-7.5a.25.25 0 0 0-.25.25V12a1 1 0 0 1-2 0V5.25C1 4.01 2 3 3.25 3z" />
    </IconBase>
  ))
);

WaveSquareBoldDuotone.displayName = 'WaveSquareBoldDuotone';

// Triple export pattern (lucide-react style)
export { WaveSquareBoldDuotone, WaveSquareBoldDuotone as WaveSquareBoldDuotoneIcon, WaveSquareBoldDuotone as SiWaveSquareBoldDuotone };
export default WaveSquareBoldDuotone;
export type { WaveSquareBoldDuotoneProps };
