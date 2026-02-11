import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RepeatFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RepeatFillDuotone = memo(
  forwardRef<SVGSVGElement, RepeatFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="repeat-fill-duotone" {...props}>
      <path d="M21 10.5a1 1 0 0 1 1 1V13a6 6 0 0 1-6 6H7v2a1 1 0 0 1-1.7.7l-3-3a1 1 0 0 1 0-1.4l3-3A1 1 0 0 1 7 15v2h9a4 4 0 0 0 4-4v-1.5a1 1 0 0 1 1-1" opacity={.4} />
        <path d="M17.62 2.08a1 1 0 0 1 1.09.21l3 3a1 1 0 0 1 0 1.42l-3 3A1 1 0 0 1 17 9V7H8a4 4 0 0 0-4 4v1.5a1 1 0 0 1-2 0V11a6 6 0 0 1 6-6h9V3a1 1 0 0 1 .62-.92" />
    </IconBase>
  ))
);

RepeatFillDuotone.displayName = 'RepeatFillDuotone';

// Triple export pattern (lucide-react style)
export { RepeatFillDuotone, RepeatFillDuotone as RepeatFillDuotoneIcon, RepeatFillDuotone as SiRepeatFillDuotone };
export default RepeatFillDuotone;
export type { RepeatFillDuotoneProps };
