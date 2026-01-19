import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TallyMarksBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TallyMarksBoldDuotone = memo(
  forwardRef<SVGSVGElement, TallyMarksBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tally-marks-bold-duotone" {...props}>
      <path d="M7 20a1 1 0 1 1-2 0v-2.63l2-1.2zM11 20a1 1 0 1 1-2 0v-5.03l2-1.2zM15 20a1 1 0 1 1-2 0v-7.43l2-1.2zM19 20a1 1 0 1 1-2 0v-9.83l2-1.2zM6 3a1 1 0 0 1 1 1v9.83l-2 1.2V4a1 1 0 0 1 1-1M10 3a1 1 0 0 1 1 1v7.43l-2 1.2V4a1 1 0 0 1 1-1M14 3a1 1 0 0 1 1 1v5.03l-2 1.2V4a1 1 0 0 1 1-1M18 3a1 1 0 0 1 1 1v2.63l-2 1.2V4a1 1 0 0 1 1-1" opacity={0.4} />
        <path fill="currentColor" d="M22.86 5.49a1 1 0 0 0-1.37-.35l-20 12a1 1 0 0 0 1.02 1.72l20-12a1 1 0 0 0 .35-1.37" />
    </IconBase>
  ))
);

TallyMarksBoldDuotone.displayName = 'TallyMarksBoldDuotone';

// Triple export pattern (lucide-react style)
export { TallyMarksBoldDuotone, TallyMarksBoldDuotone as TallyMarksBoldDuotoneIcon, TallyMarksBoldDuotone as SiTallyMarksBoldDuotone };
export type { TallyMarksBoldDuotoneProps };
