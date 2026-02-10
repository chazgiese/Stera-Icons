import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TallyMarksRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TallyMarksRegularDuotone = memo(
  forwardRef<SVGSVGElement, TallyMarksRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tally-marks-duotone" {...props}>
      <path d="M6.75 19a.75.75 0 0 1-1.5 0v-2l1.5-.91zM10.75 19a.75.75 0 0 1-1.5 0v-4.44l1.5-.92zM14.75 19a.75.75 0 0 1-1.5 0v-6.89l1.5-.91zM18.75 19a.75.75 0 0 1-1.5 0V9.67l1.5-.92zM6 4.25c.41 0 .75.34.75.75v9.33l-1.5.92V5c0-.41.34-.75.75-.75M10 4.25c.41 0 .75.34.75.75v6.88l-1.5.92V5c0-.41.34-.75.75-.75M14 4.25c.41 0 .75.34.75.75v4.44l-1.5.92V5c0-.41.34-.75.75-.75M18 4.25c.41 0 .75.34.75.75v2l-1.5.91V5c0-.41.34-.75.75-.75" opacity={0.4} />
        <path fill="currentColor" d="M20.61 5.86a.75.75 0 0 1 .78 1.28l-18 11a.75.75 0 0 1-.78-1.28z" />
    </IconBase>
  ))
);

TallyMarksRegularDuotone.displayName = 'TallyMarksRegularDuotone';

// Triple export pattern (lucide-react style)
export { TallyMarksRegularDuotone, TallyMarksRegularDuotone as TallyMarksRegularDuotoneIcon, TallyMarksRegularDuotone as SiTallyMarksRegularDuotone };
export default TallyMarksRegularDuotone;
export type { TallyMarksRegularDuotoneProps };
