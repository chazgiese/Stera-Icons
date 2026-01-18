import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PercentSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PercentSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, PercentSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm3.7 5.3a1 1 0 0 0-1.4 0l-8 8a1 1 0 1 0 1.4 1.4l8-8a1 1 0 0 0 0-1.4m-1.45 6.2a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.75 7a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.3 7.3a1 1 0 1 1 1.4 1.4l-8 8a1 1 0 1 1-1.4-1.4zM15.25 13.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M8.75 7a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

PercentSquareFillDuotone.displayName = 'PercentSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { PercentSquareFillDuotone, PercentSquareFillDuotone as PercentSquareFillDuotoneIcon, PercentSquareFillDuotone as SiPercentSquareFillDuotone };
export type { PercentSquareFillDuotoneProps };
