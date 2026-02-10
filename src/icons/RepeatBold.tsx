import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RepeatBoldProps = Omit<IconBaseProps, 'children'>;

const RepeatBold = memo(
  forwardRef<SVGSVGElement, RepeatBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="repeat-bold" {...props}>
      <path fill="currentColor" d="M21 10.5a1 1 0 0 1 1 1V13a6 6 0 0 1-6 6H5.41l1.3 1.3a1 1 0 0 1-1.42 1.4l-3-3a1 1 0 0 1 0-1.4l3-3a1 1 0 1 1 1.42 1.4L5.4 17H16a4 4 0 0 0 4-4v-1.5a1 1 0 0 1 1-1M17.3 2.3a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-3 3a1 1 0 0 1-1.4-1.4L18.58 7H8a4 4 0 0 0-4 4v1.5a1 1 0 0 1-2 0V11a6 6 0 0 1 6-6h10.59l-1.3-1.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

RepeatBold.displayName = 'RepeatBold';

// Triple export pattern (lucide-react style)
export { RepeatBold, RepeatBold as RepeatBoldIcon, RepeatBold as SiRepeatBold };
export default RepeatBold;
export type { RepeatBoldProps };
