import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RepeatBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RepeatBoldDuotone = memo(
  forwardRef<SVGSVGElement, RepeatBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.3 2.3a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-3 3a1 1 0 1 1-1.4-1.4L19.58 7H7a4 4 0 0 0-4 4v1.5a1 1 0 0 1-2 0V11a6 6 0 0 1 6-6h12.59l-1.3-1.3a1 1 0 0 1 0-1.4" />
        <path fill="currentColor" d="M22 10.5a1 1 0 0 1 1 1V13a6 6 0 0 1-6 6H4.41l1.3 1.3a1 1 0 1 1-1.42 1.4l-3-3a1 1 0 0 1 0-1.4l3-3a1 1 0 1 1 1.42 1.4L4.4 17H17a4 4 0 0 0 4-4v-1.5a1 1 0 0 1 1-1" opacity={.4} />
    </IconBase>
  ))
);

RepeatBoldDuotone.displayName = 'RepeatBoldDuotone';

export { RepeatBoldDuotone };
export type { RepeatBoldDuotoneProps };
