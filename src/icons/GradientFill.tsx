import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GradientFillProps = Omit<IconBaseProps, 'children'>;

const GradientFill = memo(
  forwardRef<SVGSVGElement, GradientFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="gradient-fill" {...props}>
      <path fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zM7.56 14.93a1.51 1.51 0 1 0 0 3.03 1.51 1.51 0 0 0 0-3.03m6.63.36a1.16 1.16 0 1 0 0 2.31 1.16 1.16 0 0 0 0-2.31m-3.14-2.4a1.34 1.34 0 1 0 0 2.67 1.34 1.34 0 0 0 0-2.67m5.93.35a.98.98 0 1 0 0 1.96.98.98 0 0 0 0-1.96M7.56 10.5a1.51 1.51 0 1 0 0 3.02 1.51 1.51 0 0 0 0-3.02m6.63.35a1.16 1.16 0 1 0 0 2.32 1.16 1.16 0 0 0 0-2.32m-3.14-2.4a1.34 1.34 0 1 0 0 2.67 1.34 1.34 0 0 0 0-2.67m5.93.36a.98.98 0 1 0 0 1.96.98.98 0 0 0 0-1.96M7.56 6.04a1.51 1.51 0 1 0 0 3.03 1.51 1.51 0 0 0 0-3.03m6.63.36a1.16 1.16 0 1 0 0 2.31 1.16 1.16 0 0 0 0-2.31" clipRule="evenodd" />
    </IconBase>
  ))
);

GradientFill.displayName = 'GradientFill';

// Triple export pattern (lucide-react style)
export { GradientFill, GradientFill as GradientFillIcon, GradientFill as SiGradientFill };
export default GradientFill;
export type { GradientFillProps };
