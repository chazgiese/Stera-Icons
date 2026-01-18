import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RepeatFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RepeatFillDuotone = memo(
  forwardRef<SVGSVGElement, RepeatFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.62 2.08a1 1 0 0 1 1.09.21l3 3a1 1 0 0 1 0 1.42l-3 3A1 1 0 0 1 18 9V7H7a4 4 0 0 0-4 4v1.5a1 1 0 0 1-2 0V11a6 6 0 0 1 6-6h11V3a1 1 0 0 1 .62-.92" />
        <path fill="currentColor" d="M22 10.5a1 1 0 0 1 1 1V13a6 6 0 0 1-6 6H6v2a1 1 0 0 1-1.7.7l-3-3a1 1 0 0 1 0-1.4l3-3A1 1 0 0 1 6 15v2h11a4 4 0 0 0 4-4v-1.5a1 1 0 0 1 1-1" opacity={.4} />
    </IconBase>
  ))
);

RepeatFillDuotone.displayName = 'RepeatFillDuotone';

export { RepeatFillDuotone };
export type { RepeatFillDuotoneProps };
