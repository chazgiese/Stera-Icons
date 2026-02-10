import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RepeatBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RepeatBoldDuotone = memo(
  forwardRef<SVGSVGElement, RepeatBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="repeat-bold-duotone" {...props}>
      <path fill="currentColor" d="M21 10.5a1 1 0 0 1 1 1V13a6 6 0 0 1-6 6H5.41l1.3 1.3a1 1 0 1 1-1.42 1.4l-3-3a1 1 0 0 1 0-1.4l3-3a1 1 0 1 1 1.42 1.4L5.4 17H16a4 4 0 0 0 4-4v-1.5a1 1 0 0 1 1-1" opacity={.4} />
        <path fill="currentColor" d="M17.3 2.3a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-3 3a1 1 0 0 1-1.4-1.4L18.58 7H8a4 4 0 0 0-4 4v1.5a1 1 0 0 1-2 0V11a6 6 0 0 1 6-6h10.59l-1.3-1.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

RepeatBoldDuotone.displayName = 'RepeatBoldDuotone';

// Triple export pattern (lucide-react style)
export { RepeatBoldDuotone, RepeatBoldDuotone as RepeatBoldDuotoneIcon, RepeatBoldDuotone as SiRepeatBoldDuotone };
export default RepeatBoldDuotone;
export type { RepeatBoldDuotoneProps };
