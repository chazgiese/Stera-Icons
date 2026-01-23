import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TallyMarksBoldProps = Omit<IconBaseProps, 'children'>;

const TallyMarksBold = memo(
  forwardRef<SVGSVGElement, TallyMarksBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="tally-marks-bold" {...props}>
      <path fill="currentColor" d="M6 3a1 1 0 0 0-1 1v11.03l-3.51 2.11a1 1 0 0 0 1.02 1.72L5 17.36V20a1 1 0 1 0 2 0v-3.84l2-1.2V20a1 1 0 1 0 2 0v-6.24l2-1.2V20a1 1 0 1 0 2 0v-8.63l2-1.2V20a1 1 0 1 0 2 0V8.97l3.52-2.11a1 1 0 0 0-1.03-1.72L19 6.64V4a1 1 0 0 0-2 0v3.83l-2 1.2V4a1 1 0 0 0-2 0v6.23l-2 1.2V4a1 1 0 0 0-2 0v8.63l-2 1.2V4a1 1 0 0 0-1-1" />
    </IconBase>
  ))
);

TallyMarksBold.displayName = 'TallyMarksBold';

// Triple export pattern (lucide-react style)
export { TallyMarksBold, TallyMarksBold as TallyMarksBoldIcon, TallyMarksBold as SiTallyMarksBold };
export default TallyMarksBold;
export type { TallyMarksBoldProps };
