import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TallyMarksRegularProps = Omit<IconBaseProps, 'children'>;

const TallyMarksRegular = memo(
  forwardRef<SVGSVGElement, TallyMarksRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="tally-marks" {...props}>
      <path fill="currentColor" d="M18 4.25c.41 0 .75.34.75.75v2l1.86-1.14a.75.75 0 0 1 .78 1.28l-2.64 1.61V19a.75.75 0 0 1-1.5 0V9.67l-2.5 1.53V19a.75.75 0 0 1-1.5 0v-6.89l-2.5 1.53V19a.75.75 0 0 1-1.5 0v-4.44l-2.5 1.53V19a.75.75 0 0 1-1.5 0v-2l-1.86 1.14a.75.75 0 1 1-.78-1.28l2.64-1.61V5a.75.75 0 0 1 1.5 0v9.33l2.5-1.53V5a.75.75 0 0 1 1.5 0v6.88l2.5-1.52V5a.75.75 0 1 1 1.5 0v4.44l2.5-1.53V5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

TallyMarksRegular.displayName = 'TallyMarksRegular';

// Triple export pattern (lucide-react style)
export { TallyMarksRegular, TallyMarksRegular as TallyMarksRegularIcon, TallyMarksRegular as SiTallyMarksRegular };
export default TallyMarksRegular;
export type { TallyMarksRegularProps };
