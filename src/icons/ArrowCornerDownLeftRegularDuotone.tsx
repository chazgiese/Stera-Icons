import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-down-left-duotone" {...props}>
      <path fill="currentColor" d="M19 4.25c.41 0 .75.34.75.75v8A3.75 3.75 0 0 1 16 16.75H5.81L5.06 16l.75-.75H16c1.24 0 2.25-1 2.25-2.25V5c0-.41.34-.75.75-.75" opacity={.4} />
        <path fill="currentColor" d="M7.47 11.47a.75.75 0 1 1 1.06 1.06L5.06 16l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4-.1-.11a.75.75 0 0 1 .1-.95z" />
    </IconBase>
  ))
);

ArrowCornerDownLeftRegularDuotone.displayName = 'ArrowCornerDownLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownLeftRegularDuotone, ArrowCornerDownLeftRegularDuotone as ArrowCornerDownLeftRegularDuotoneIcon, ArrowCornerDownLeftRegularDuotone as SiArrowCornerDownLeftRegularDuotone };
export default ArrowCornerDownLeftRegularDuotone;
export type { ArrowCornerDownLeftRegularDuotoneProps };
