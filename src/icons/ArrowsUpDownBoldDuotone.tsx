import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowsUpDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowsUpDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowsUpDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrows-up-down-bold-duotone" {...props}>
      <path d="M8 5.41V21a1 1 0 1 1-2 0V5.41l1-1zM17 3a1 1 0 0 1 1 1v15.59l-1 1-1-1V4a1 1 0 0 1 1-1" opacity={0.4} />
        <path d="M20.3 17.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.33.08l-.08-.07-4-4a1 1 0 1 1 1.42-1.42L17 20.6zM7 2a1 1 0 0 1 .7.3l4 4a1 1 0 1 1-1.4 1.4L7 4.42l-3.3 3.3a1 1 0 1 1-1.4-1.42l4-4 .07-.06A1 1 0 0 1 7 2" />
    </IconBase>
  ))
);

ArrowsUpDownBoldDuotone.displayName = 'ArrowsUpDownBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowsUpDownBoldDuotone, ArrowsUpDownBoldDuotone as ArrowsUpDownBoldDuotoneIcon, ArrowsUpDownBoldDuotone as SiArrowsUpDownBoldDuotone };
export default ArrowsUpDownBoldDuotone;
export type { ArrowsUpDownBoldDuotoneProps };
