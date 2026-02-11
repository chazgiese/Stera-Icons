import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TallyMarksBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TallyMarksBoldDuotone = memo(
  forwardRef<SVGSVGElement, TallyMarksBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tally-marks-bold-duotone" {...props}>
      <path d="M7 19a1 1 0 1 1-2 0v-1.55l2-1.22zM11 19a1 1 0 1 1-2 0v-4l2-1.22zM15 19a1 1 0 1 1-2 0v-6.44l2-1.22zM19 19a1 1 0 1 1-2 0v-8.88l2-1.23zM6 4a1 1 0 0 1 1 1v8.88l-2 1.23V5a1 1 0 0 1 1-1M10 4a1 1 0 0 1 1 1v6.44l-2 1.22V5a1 1 0 0 1 1-1M14 4a1 1 0 0 1 1 1v4l-2 1.22V5a1 1 0 0 1 1-1M18 4a1 1 0 0 1 1 1v1.55l-2 1.22V5a1 1 0 0 1 1-1" opacity={0.4} />
        <path d="M20.48 5.65a1 1 0 0 1 1.04 1.7l-18 11a1 1 0 0 1-1.04-1.7z" />
    </IconBase>
  ))
);

TallyMarksBoldDuotone.displayName = 'TallyMarksBoldDuotone';

// Triple export pattern (lucide-react style)
export { TallyMarksBoldDuotone, TallyMarksBoldDuotone as TallyMarksBoldDuotoneIcon, TallyMarksBoldDuotone as SiTallyMarksBoldDuotone };
export default TallyMarksBoldDuotone;
export type { TallyMarksBoldDuotoneProps };
