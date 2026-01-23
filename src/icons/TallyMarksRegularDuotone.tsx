import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TallyMarksRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TallyMarksRegularDuotone = memo(
  forwardRef<SVGSVGElement, TallyMarksRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tally-marks-duotone" {...props}>
      <path d="M6.75 20a.75.75 0 0 1-1.5 0v-3.08l1.5-.9zM10.75 20a.75.75 0 0 1-1.5 0v-5.48l1.5-.9zM14.75 20a.75.75 0 0 1-1.5 0v-7.87l1.5-.9zM18.75 20a.75.75 0 0 1-1.5 0V9.72l1.5-.9zM6 3.25c.41 0 .75.34.75.75v10.28l-1.5.9V4c0-.41.34-.75.75-.75M10 3.25c.41 0 .75.34.75.75v7.88l-1.5.9V4c0-.41.34-.75.75-.75M14 3.25c.41 0 .75.34.75.75v5.48l-1.5.9V4c0-.41.34-.75.75-.75M18 3.25c.41 0 .75.34.75.75v3.08l-1.5.9V4c0-.41.34-.75.75-.75" opacity={0.4} />
        <path fill="currentColor" d="M21.61 5.36a.75.75 0 0 1 .78 1.28l-20 12a.75.75 0 0 1-.78-1.28z" />
    </IconBase>
  ))
);

TallyMarksRegularDuotone.displayName = 'TallyMarksRegularDuotone';

// Triple export pattern (lucide-react style)
export { TallyMarksRegularDuotone, TallyMarksRegularDuotone as TallyMarksRegularDuotoneIcon, TallyMarksRegularDuotone as SiTallyMarksRegularDuotone };
export default TallyMarksRegularDuotone;
export type { TallyMarksRegularDuotoneProps };
