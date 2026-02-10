import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TallyMarksFillProps = Omit<IconBaseProps, 'children'>;

const TallyMarksFill = memo(
  forwardRef<SVGSVGElement, TallyMarksFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="tally-marks-fill" {...props}>
      <path fill="currentColor" d="M18 3.5c.83 0 1.5.67 1.5 1.5v.66l.72-.44a1.5 1.5 0 0 1 1.56 2.56l-2.28 1.4V19a1.5 1.5 0 0 1-3 0v-8l-1 .62V19a1.5 1.5 0 0 1-3 0v-5.55l-1 .61V19a1.5 1.5 0 0 1-3 0v-3.1l-1 .6V19a1.5 1.5 0 0 1-3 0v-.66l-.72.44a1.5 1.5 0 0 1-1.56-2.56l2.28-1.4V5a1.5 1.5 0 0 1 3 0v8l1-.62V5a1.5 1.5 0 0 1 3 0v5.55l1-.61V5a1.5 1.5 0 0 1 3 0v3.1l1-.6V5c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

TallyMarksFill.displayName = 'TallyMarksFill';

// Triple export pattern (lucide-react style)
export { TallyMarksFill, TallyMarksFill as TallyMarksFillIcon, TallyMarksFill as SiTallyMarksFill };
export default TallyMarksFill;
export type { TallyMarksFillProps };
