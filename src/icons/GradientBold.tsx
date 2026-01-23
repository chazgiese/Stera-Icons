import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GradientBoldProps = Omit<IconBaseProps, 'children'>;

const GradientBold = memo(
  forwardRef<SVGSVGElement, GradientBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="gradient-bold" {...props}>
      <path fill="currentColor" d="M7 15.38a1.62 1.62 0 1 1 0 3.24 1.62 1.62 0 0 1 0-3.25M14.47 15.78a1.23 1.23 0 1 1 0 2.45 1.23 1.23 0 0 1 0-2.45M10.93 13.08a1.43 1.43 0 1 1 0 2.85 1.43 1.43 0 0 1 0-2.85M17.7 13.48a1.03 1.03 0 1 1-1.12 1.12v-.2c.05-.52.49-.93 1.02-.93zM7 10.38a1.62 1.62 0 1 1 0 3.24 1.62 1.62 0 0 1 0-3.24M14.47 10.78a1.23 1.23 0 1 1 0 2.45 1.23 1.23 0 0 1 0-2.45M10.93 8.08a1.43 1.43 0 1 1 0 2.85 1.43 1.43 0 0 1 0-2.85M17.7 8.48a1.03 1.03 0 1 1-1.12 1.12v-.2c.05-.52.49-.93 1.02-.93zM7 5.38a1.63 1.63 0 1 1 0 3.25 1.63 1.63 0 0 1 0-3.26M14.47 5.78a1.23 1.23 0 1 1 0 2.45 1.23 1.23 0 0 1 0-2.45" />
        <path fill="currentColor" fillRule="evenodd" d="M14.6 2q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v5.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.4q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q1.99 16.25 2 14.6V9.4q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q7.75 1.99 9.4 2zM9.4 4c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C4 7.47 4 8.26 4 9.4v5.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h5.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55V9.4c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C16.53 4 15.74 4 14.6 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

GradientBold.displayName = 'GradientBold';

// Triple export pattern (lucide-react style)
export { GradientBold, GradientBold as GradientBoldIcon, GradientBold as SiGradientBold };
export default GradientBold;
export type { GradientBoldProps };
