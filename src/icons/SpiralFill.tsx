import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpiralFillProps = Omit<IconBaseProps, 'children'>;

const SpiralFill = memo(
  forwardRef<SVGSVGElement, SpiralFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="spiral-fill" {...props}>
      <path d="M12 1.5A11.5 11.5 0 0 1 23.5 13a1.5 1.5 0 0 1-3 0 8.5 8.5 0 0 0-17 0 6.5 6.5 0 1 0 13 0 4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0 .5.5 0 0 0-1 0 1.5 1.5 0 0 1-3 0 3.5 3.5 0 1 1 7 0 5.5 5.5 0 1 1-11 0 7.5 7.5 0 1 1 15 0 9.5 9.5 0 0 1-19 0A11.5 11.5 0 0 1 12 1.5" />
    </IconBase>
  ))
);

SpiralFill.displayName = 'SpiralFill';

// Triple export pattern (lucide-react style)
export { SpiralFill, SpiralFill as SpiralFillIcon, SpiralFill as SiSpiralFill };
export default SpiralFill;
export type { SpiralFillProps };
