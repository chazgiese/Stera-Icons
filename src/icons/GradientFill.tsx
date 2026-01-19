import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GradientFillProps = Omit<IconBaseProps, 'children'>;

const GradientFill = memo(
  forwardRef<SVGSVGElement, GradientFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="gradient-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.6 2.5q1.65-.02 2.67.06c.7.05 1.26.17 1.77.43a4.5 4.5 0 0 1 1.97 1.97q.37.74.43 1.77c.06.7.06 1.56.06 2.67v5.2q.02 1.65-.06 2.67c-.05.7-.17 1.26-.43 1.77a4.5 4.5 0 0 1-1.97 1.97q-.73.37-1.77.43c-.7.06-1.56.06-2.67.06H9.4q-1.65.02-2.67-.06a5 5 0 0 1-1.77-.43 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.43-1.77 36 36 0 0 1-.06-2.67V9.4q-.02-1.65.06-2.67c.05-.7.17-1.26.43-1.77a4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.77-.43c.7-.06 1.56-.06 2.67-.06zM7 15.38a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.25m7.47.4a1.23 1.23 0 1 0 0 2.45 1.23 1.23 0 0 0 0-2.45m-3.54-2.7a1.42 1.42 0 1 0 0 2.85 1.42 1.42 0 0 0 0-2.85m6.67.4c-.53 0-.97.4-1.02.91v.21a1.03 1.03 0 1 0 1.13-1.12zM7 10.37a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24m7.47.4a1.23 1.23 0 1 0 0 2.45 1.23 1.23 0 0 0 0-2.45m-3.54-2.7a1.42 1.42 0 1 0 0 2.85 1.42 1.42 0 0 0 0-2.85m6.67.4c-.53 0-.97.4-1.02.91v.21a1.03 1.03 0 1 0 1.13-1.12zM7 5.37a1.63 1.63 0 1 0 0 3.25 1.63 1.63 0 0 0 0-3.26m7.47.4a1.23 1.23 0 1 0 0 2.45 1.23 1.23 0 0 0 0-2.45" clipRule="evenodd" />
    </IconBase>
  ))
);

GradientFill.displayName = 'GradientFill';

// Triple export pattern (lucide-react style)
export { GradientFill, GradientFill as GradientFillIcon, GradientFill as SiGradientFill };
export type { GradientFillProps };
