import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronSquareUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronSquareUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronSquareUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-square-up-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-.3 6.8a1 1 0 0 0-1.4 0l-4.5 4.5a1 1 0 1 0 1.4 1.4l3.8-3.79 3.8 3.8a1 1 0 0 0 1.4-1.42z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M11.3 8.8a1 1 0 0 1 1.4 0l4.5 4.5a1 1 0 0 1-1.4 1.4L12 10.92l-3.8 3.8a1 1 0 0 1-1.4-1.42z" />
    </IconBase>
  ))
);

ChevronSquareUpFillDuotone.displayName = 'ChevronSquareUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronSquareUpFillDuotone, ChevronSquareUpFillDuotone as ChevronSquareUpFillDuotoneIcon, ChevronSquareUpFillDuotone as SiChevronSquareUpFillDuotone };
export default ChevronSquareUpFillDuotone;
export type { ChevronSquareUpFillDuotoneProps };
