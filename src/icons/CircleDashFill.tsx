import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDashFillProps = Omit<IconBaseProps, 'children'>;

const CircleDashFill = memo(
  forwardRef<SVGSVGElement, CircleDashFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-dash-fill" {...props}>
      <path d="M13.56 19.85a1 1 0 1 1 .39 1.96 10 10 0 0 1-3.9 0 1 1 0 0 1 .39-1.96 8 8 0 0 0 3.12 0M3.96 16.17a1 1 0 0 1 1.39.27 8 8 0 0 0 2.2 2.21 1 1 0 0 1-1.1 1.67 10 10 0 0 1-2.77-2.76 1 1 0 0 1 .28-1.39M18.65 16.44a1 1 0 0 1 1.67 1.12 10 10 0 0 1-2.76 2.76 1 1 0 0 1-1.12-1.67 8 8 0 0 0 2.21-2.2M12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12M2.19 10.05a1 1 0 0 1 1.96.39 8 8 0 0 0 0 3.12 1 1 0 0 1-1.96.39 10 10 0 0 1 0-3.9M20.63 9.26a1 1 0 0 1 1.18.79 10 10 0 0 1 0 3.9 1 1 0 0 1-1.96-.39 8 8 0 0 0 0-3.12 1 1 0 0 1 .78-1.18M6.44 3.68a1 1 0 0 1 1.12 1.67 8 8 0 0 0-2.21 2.2 1 1 0 0 1-1.67-1.1 10 10 0 0 1 2.76-2.77M16.17 3.96a1 1 0 0 1 1.39-.28q1.65 1.11 2.76 2.76a1 1 0 0 1-1.67 1.12 8 8 0 0 0-2.2-2.21 1 1 0 0 1-.28-1.39M12 2q1 0 1.95.19a1 1 0 0 1-.39 1.96 8 8 0 0 0-3.12 0 1 1 0 0 1-.39-1.96Q11 2.01 12 2" />
    </IconBase>
  ))
);

CircleDashFill.displayName = 'CircleDashFill';

// Triple export pattern (lucide-react style)
export { CircleDashFill, CircleDashFill as CircleDashFillIcon, CircleDashFill as SiCircleDashFill };
export default CircleDashFill;
export type { CircleDashFillProps };
