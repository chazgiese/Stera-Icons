import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftTopRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftTopRegular = memo(
  forwardRef<SVGSVGElement, ArrowULeftTopRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-top" {...props}>
      <path fill="currentColor" d="M7.47 3.47a.75.75 0 1 1 1.06 1.06L5.81 7.25h7.69a6.25 6.25 0 0 1 0 12.5H9a.75.75 0 0 1 0-1.5h4.5a4.75 4.75 0 0 0 0-9.5H5.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1-.1-.95l.1-.11z" />
    </IconBase>
  ))
);

ArrowULeftTopRegular.displayName = 'ArrowULeftTopRegular';

// Triple export pattern (lucide-react style)
export { ArrowULeftTopRegular, ArrowULeftTopRegular as ArrowULeftTopRegularIcon, ArrowULeftTopRegular as SiArrowULeftTopRegular };
export default ArrowULeftTopRegular;
export type { ArrowULeftTopRegularProps };
