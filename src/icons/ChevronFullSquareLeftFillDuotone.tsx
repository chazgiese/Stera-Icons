import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullSquareLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullSquareLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullSquareLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-square-left-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 3q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q2.98 14.05 3 12q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q9.95 2.98 12 3m2.75 6.01c0-1.04-1.2-1.62-2.02-.99l-3.84 3c-.64.5-.64 1.47 0 1.97l3.84 2.99c.82.63 2.02.05 2.02-1z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.73 8.02a1.25 1.25 0 0 1 2.02 1v5.97c0 1.04-1.2 1.62-2.02.99l-3.84-3a1.25 1.25 0 0 1 0-1.97z" />
    </IconBase>
  ))
);

ChevronFullSquareLeftFillDuotone.displayName = 'ChevronFullSquareLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullSquareLeftFillDuotone, ChevronFullSquareLeftFillDuotone as ChevronFullSquareLeftFillDuotoneIcon, ChevronFullSquareLeftFillDuotone as SiChevronFullSquareLeftFillDuotone };
export default ChevronFullSquareLeftFillDuotone;
export type { ChevronFullSquareLeftFillDuotoneProps };
