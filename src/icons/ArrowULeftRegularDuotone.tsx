import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowULeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-duotone" {...props}>
      <path fill="currentColor" d="M13.5 4.25a6.25 6.25 0 1 1 0 12.5H5.81L5.06 16l.75-.75h7.69a4.75 4.75 0 1 0 0-9.5H9a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path fill="currentColor" d="M7.47 11.47a.75.75 0 1 1 1.06 1.06L5.06 16l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4-.1-.11a.75.75 0 0 1 .1-.95z" />
    </IconBase>
  ))
);

ArrowULeftRegularDuotone.displayName = 'ArrowULeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowULeftRegularDuotone, ArrowULeftRegularDuotone as ArrowULeftRegularDuotoneIcon, ArrowULeftRegularDuotone as SiArrowULeftRegularDuotone };
export default ArrowULeftRegularDuotone;
export type { ArrowULeftRegularDuotoneProps };
