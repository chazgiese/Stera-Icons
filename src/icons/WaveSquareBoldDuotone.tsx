import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSquareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveSquareBoldDuotone = memo(
  forwardRef<SVGSVGElement, WaveSquareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-square-bold-duotone" {...props}>
      <path d="M21 11a1 1 0 0 1 1 1v5.75c0 1.24-1 2.25-2.25 2.25h-6.5C12.01 20 11 19 11 17.75V12h2v5.75q.02.23.25.25h6.5q.23-.02.25-.25V12a1 1 0 0 1 1-1" opacity={.4} />
        <path d="M10.75 4C11.99 4 13 5 13 6.25V12h-2V6.25a.25.25 0 0 0-.25-.25h-6.5a.25.25 0 0 0-.25.25V12a1 1 0 1 1-2 0V6.25C2 5.01 3 4 4.25 4z" />
    </IconBase>
  ))
);

WaveSquareBoldDuotone.displayName = 'WaveSquareBoldDuotone';

// Triple export pattern (lucide-react style)
export { WaveSquareBoldDuotone, WaveSquareBoldDuotone as WaveSquareBoldDuotoneIcon, WaveSquareBoldDuotone as SiWaveSquareBoldDuotone };
export default WaveSquareBoldDuotone;
export type { WaveSquareBoldDuotoneProps };
