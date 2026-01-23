import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparkleSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, SparkleSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkle-square-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-.73 3.54a.3.3 0 0 0-.54 0l-1.47 2.93a4 4 0 0 1-1.79 1.8l-2.93 1.46a.3.3 0 0 0 0 .54l2.93 1.47a4 4 0 0 1 1.8 1.79l1.46 2.93a.3.3 0 0 0 .54 0l1.47-2.93a4 4 0 0 1 1.79-1.8l2.93-1.46a.3.3 0 0 0 0-.54l-2.93-1.47a4 4 0 0 1-1.8-1.79z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M11.73 5.54a.3.3 0 0 1 .54 0l1.47 2.93a4 4 0 0 0 1.79 1.8l2.93 1.46a.3.3 0 0 1 0 .54l-2.93 1.47a4 4 0 0 0-1.8 1.79l-1.46 2.93a.3.3 0 0 1-.54 0l-1.47-2.93a4 4 0 0 0-1.79-1.8l-2.93-1.46a.3.3 0 0 1 0-.54l2.93-1.47a4 4 0 0 0 1.8-1.79z" />
    </IconBase>
  ))
);

SparkleSquareFillDuotone.displayName = 'SparkleSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { SparkleSquareFillDuotone, SparkleSquareFillDuotone as SparkleSquareFillDuotoneIcon, SparkleSquareFillDuotone as SiSparkleSquareFillDuotone };
export default SparkleSquareFillDuotone;
export type { SparkleSquareFillDuotoneProps };
