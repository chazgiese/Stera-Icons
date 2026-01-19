import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SpiralBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpiralBoldDuotone = memo(
  forwardRef<SVGSVGElement, SpiralBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="spiral-bold-duotone" {...props}>
      <path d="M3 13a7 7 0 1 0 14 0h2a9 9 0 1 1-18 0z" opacity={0.4} />
        <path d="M7 13a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0z" opacity={0.4} />
        <path fill="currentColor" d="M12 10a3 3 0 0 1 3 3h-2a1 1 0 0 0-2-.1v.2a1 1 0 0 1-2-.1 3 3 0 0 1 3-3" />
        <path fill="currentColor" d="M12 2a11 11 0 0 1 11 11 1 1 0 1 1-2 0 9 9 0 1 0-18 0H1A11 11 0 0 1 12 2" />
        <path fill="currentColor" d="M12 6a7 7 0 0 1 7 7h-2a5 5 0 0 0-10 0H5a7 7 0 0 1 7-7" />
    </IconBase>
  ))
);

SpiralBoldDuotone.displayName = 'SpiralBoldDuotone';

// Triple export pattern (lucide-react style)
export { SpiralBoldDuotone, SpiralBoldDuotone as SpiralBoldDuotoneIcon, SpiralBoldDuotone as SiSpiralBoldDuotone };
export default SpiralBoldDuotone;
export type { SpiralBoldDuotoneProps };
