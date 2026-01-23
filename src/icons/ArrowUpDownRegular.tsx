import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpDownRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowUpDownRegular = memo(
  forwardRef<SVGSVGElement, ArrowUpDownRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-down" {...props}>
      <path fill="currentColor" d="M12 1.25q.31 0 .53.22l4.5 4.5a.75.75 0 1 1-1.06 1.06l-3.22-3.22V20.2l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-.95.1l-.11-.1-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3.81L8.03 7.03a.75.75 0 1 1-1.06-1.06l4.5-4.5.11-.1a1 1 0 0 1 .42-.12" />
    </IconBase>
  ))
);

ArrowUpDownRegular.displayName = 'ArrowUpDownRegular';

// Triple export pattern (lucide-react style)
export { ArrowUpDownRegular, ArrowUpDownRegular as ArrowUpDownRegularIcon, ArrowUpDownRegular as SiArrowUpDownRegular };
export default ArrowUpDownRegular;
export type { ArrowUpDownRegularProps };
