import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpiralRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpiralRegularDuotone = memo(
  forwardRef<SVGSVGElement, SpiralRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="spiral-duotone" {...props}>
      <path d="M2.75 13a7.25 7.25 0 1 0 14.5 0h1.5a8.75 8.75 0 1 1-17.5 0z" opacity={0.4} />
        <path d="M6.75 13a3.25 3.25 0 0 0 6.5 0h1.5a4.75 4.75 0 1 1-9.5 0z" opacity={0.4} />
        <path fill="currentColor" d="M12 10.25A2.75 2.75 0 0 1 14.75 13h-1.5a1.25 1.25 0 1 0-2.5 0 .75.75 0 0 1-1.5 0A2.75 2.75 0 0 1 12 10.25" />
        <path fill="currentColor" d="M12 2.25c5.94 0 10.75 4.81 10.75 10.75a.75.75 0 0 1-1.5 0 9.25 9.25 0 0 0-18.5 0h-1.5C1.25 7.06 6.06 2.25 12 2.25" />
        <path fill="currentColor" d="M12 6.25A6.75 6.75 0 0 1 18.75 13h-1.5a5.25 5.25 0 1 0-10.5 0h-1.5A6.75 6.75 0 0 1 12 6.25" />
    </IconBase>
  ))
);

SpiralRegularDuotone.displayName = 'SpiralRegularDuotone';

// Triple export pattern (lucide-react style)
export { SpiralRegularDuotone, SpiralRegularDuotone as SpiralRegularDuotoneIcon, SpiralRegularDuotone as SiSpiralRegularDuotone };
export default SpiralRegularDuotone;
export type { SpiralRegularDuotoneProps };
