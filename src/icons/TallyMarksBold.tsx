import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TallyMarksBoldProps = Omit<IconBaseProps, 'children'>;

const TallyMarksBold = memo(
  forwardRef<SVGSVGElement, TallyMarksBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="tally-marks-bold" {...props}>
      <path fill="currentColor" d="M18 4a1 1 0 0 1 1 1v1.55l1.48-.9a1 1 0 0 1 1.04 1.7L19 8.9V19a1 1 0 1 1-2 0v-8.88l-2 1.22V19a1 1 0 1 1-2 0v-6.44l-2 1.22V19a1 1 0 1 1-2 0v-4l-2 1.23V19a1 1 0 1 1-2 0v-1.55l-1.48.9a1 1 0 0 1-1.04-1.7L5 15.1V5a1 1 0 0 1 2 0v8.88l2-1.22V5a1 1 0 0 1 2 0v6.44l2-1.22V5a1 1 0 0 1 2 0v4l2-1.23V5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

TallyMarksBold.displayName = 'TallyMarksBold';

// Triple export pattern (lucide-react style)
export { TallyMarksBold, TallyMarksBold as TallyMarksBoldIcon, TallyMarksBold as SiTallyMarksBold };
export default TallyMarksBold;
export type { TallyMarksBoldProps };
