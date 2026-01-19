import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TallyMarksFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TallyMarksFillDuotone = memo(
  forwardRef<SVGSVGElement, TallyMarksFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tally-marks-fill-duotone" {...props}>
      <path d="M7.5 20a1.5 1.5 0 0 1-3 0v-1.75l3-1.8zM11.5 20a1.5 1.5 0 0 1-3 0v-4.15l3-1.8zM15.5 20a1.5 1.5 0 0 1-3 0v-6.55l3-1.8zM19.5 20a1.5 1.5 0 0 1-3 0v-8.95l3-1.8zM6 2.5c.83 0 1.5.67 1.5 1.5v8.95l-3 1.8V4c0-.83.67-1.5 1.5-1.5M10 2.5c.83 0 1.5.67 1.5 1.5v6.55l-3 1.8V4c0-.83.67-1.5 1.5-1.5M14 2.5c.83 0 1.5.67 1.5 1.5v4.15l-3 1.8V4c0-.83.67-1.5 1.5-1.5M18 2.5c.83 0 1.5.67 1.5 1.5v1.75l-3 1.8V4c0-.83.67-1.5 1.5-1.5" opacity={0.4} />
        <path fill="currentColor" d="M23.29 5.23a1.5 1.5 0 0 0-2.06-.52l-20 12a1.5 1.5 0 0 0 1.54 2.58l20-12a1.5 1.5 0 0 0 .52-2.06" />
    </IconBase>
  ))
);

TallyMarksFillDuotone.displayName = 'TallyMarksFillDuotone';

// Triple export pattern (lucide-react style)
export { TallyMarksFillDuotone, TallyMarksFillDuotone as TallyMarksFillDuotoneIcon, TallyMarksFillDuotone as SiTallyMarksFillDuotone };
export type { TallyMarksFillDuotoneProps };
