import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SpiralBoldProps = Omit<IconBaseProps, 'children'>;

const SpiralBold = memo(
  forwardRef<SVGSVGElement, SpiralBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="spiral-bold" {...props}>
      <path fill="currentColor" d="M12 2a11 11 0 0 1 11 11 1 1 0 1 1-2 0 9 9 0 1 0-18 0 7 7 0 1 0 14 0 5 5 0 0 0-10 0 3 3 0 1 0 6 0 1 1 0 0 0-2-.1v.2a1 1 0 0 1-2-.1 3 3 0 1 1 6 0 5 5 0 0 1-10 0 7 7 0 0 1 14 0 9 9 0 1 1-18 0A11 11 0 0 1 12 2" />
    </IconBase>
  ))
);

SpiralBold.displayName = 'SpiralBold';

// Triple export pattern (lucide-react style)
export { SpiralBold, SpiralBold as SpiralBoldIcon, SpiralBold as SiSpiralBold };
export default SpiralBold;
export type { SpiralBoldProps };
