import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TallyMarksFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TallyMarksFillDuotone = memo(
  forwardRef<SVGSVGElement, TallyMarksFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tally-marks-fill-duotone" {...props}>
      <path d="M7.5 19a1.5 1.5 0 0 1-3 0v-.66l3-1.83zM11.5 19a1.5 1.5 0 0 1-3 0v-3.1l3-1.84zM15.5 19a1.5 1.5 0 0 1-3 0v-5.55l3-1.83zM19.5 19a1.5 1.5 0 0 1-3 0v-8l3-1.83zM6 3.5c.83 0 1.5.67 1.5 1.5v8l-3 1.82V5c0-.83.67-1.5 1.5-1.5M10 3.5c.83 0 1.5.67 1.5 1.5v5.55l-3 1.83V5c0-.83.67-1.5 1.5-1.5M14 3.5c.83 0 1.5.67 1.5 1.5v3.1l-3 1.84V5c0-.83.67-1.5 1.5-1.5M18 3.5c.83 0 1.5.67 1.5 1.5v.66l-3 1.83V5c0-.83.67-1.5 1.5-1.5" opacity={0.4} />
        <path d="M20.22 5.22a1.5 1.5 0 0 1 1.56 2.56l-18 11a1.5 1.5 0 0 1-1.56-2.56z" />
    </IconBase>
  ))
);

TallyMarksFillDuotone.displayName = 'TallyMarksFillDuotone';

// Triple export pattern (lucide-react style)
export { TallyMarksFillDuotone, TallyMarksFillDuotone as TallyMarksFillDuotoneIcon, TallyMarksFillDuotone as SiTallyMarksFillDuotone };
export default TallyMarksFillDuotone;
export type { TallyMarksFillDuotoneProps };
