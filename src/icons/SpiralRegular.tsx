import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SpiralRegularProps = Omit<IconBaseProps, 'children'>;

const SpiralRegular = memo(
  forwardRef<SVGSVGElement, SpiralRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="spiral" {...props}>
      <path fill="currentColor" d="M12 2.25c5.94 0 10.75 4.81 10.75 10.75a.75.75 0 0 1-1.5 0 9.25 9.25 0 0 0-18.5 0 7.25 7.25 0 1 0 14.5 0 5.25 5.25 0 1 0-10.5 0 3.25 3.25 0 0 0 6.5 0 1.25 1.25 0 1 0-2.5 0 .75.75 0 0 1-1.5 0 2.75 2.75 0 1 1 5.5 0 4.75 4.75 0 1 1-9.5 0 6.75 6.75 0 0 1 13.5 0 8.75 8.75 0 1 1-17.5 0C1.25 7.06 6.06 2.25 12 2.25" />
    </IconBase>
  ))
);

SpiralRegular.displayName = 'SpiralRegular';

// Triple export pattern (lucide-react style)
export { SpiralRegular, SpiralRegular as SpiralRegularIcon, SpiralRegular as SiSpiralRegular };
export default SpiralRegular;
export type { SpiralRegularProps };
