import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftTopRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftTopRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowULeftTopRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-top-duotone" {...props}>
      <path d="M13.5 7.25a6.25 6.25 0 1 1 0 12.5H9a.75.75 0 0 1 0-1.5h4.5a4.75 4.75 0 1 0 0-9.5H5.81L5.06 8l.75-.75z" opacity={.4} />
        <path d="M7.47 3.47a.75.75 0 1 1 1.06 1.06L5.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1-.1-.95l.1-.11z" />
    </IconBase>
  ))
);

ArrowULeftTopRegularDuotone.displayName = 'ArrowULeftTopRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowULeftTopRegularDuotone, ArrowULeftTopRegularDuotone as ArrowULeftTopRegularDuotoneIcon, ArrowULeftTopRegularDuotone as SiArrowULeftTopRegularDuotone };
export default ArrowULeftTopRegularDuotone;
export type { ArrowULeftTopRegularDuotoneProps };
