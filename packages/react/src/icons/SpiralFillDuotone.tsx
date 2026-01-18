import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SpiralFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpiralFillDuotone = memo(
  forwardRef<SVGSVGElement, SpiralFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 13a6.5 6.5 0 1 0 13 0h3a9.5 9.5 0 0 1-19 0z" opacity={0.4} />
        <path d="M7.5 13a2.5 2.5 0 0 0 5 0h3a5.5 5.5 0 1 1-11 0z" opacity={0.4} />
        <path fill="currentColor" d="M12 9.5a3.5 3.5 0 0 1 3.5 3.5h-3a.5.5 0 0 0-1 0 1.5 1.5 0 0 1-3 0A3.5 3.5 0 0 1 12 9.5" />
        <path fill="currentColor" d="M12 1.5A11.5 11.5 0 0 1 23.5 13a1.5 1.5 0 0 1-3 0 8.5 8.5 0 0 0-17 0h-3A11.5 11.5 0 0 1 12 1.5" />
        <path fill="currentColor" d="M12 5.5a7.5 7.5 0 0 1 7.5 7.5h-3a4.5 4.5 0 1 0-9 0h-3A7.5 7.5 0 0 1 12 5.5" />
    </IconBase>
  ))
);

SpiralFillDuotone.displayName = 'SpiralFillDuotone';

// Triple export pattern (lucide-react style)
export { SpiralFillDuotone, SpiralFillDuotone as SpiralFillDuotoneIcon, SpiralFillDuotone as SiSpiralFillDuotone };
export type { SpiralFillDuotoneProps };
