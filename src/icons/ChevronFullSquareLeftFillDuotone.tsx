import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullSquareLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullSquareLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullSquareLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-square-left-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm1.75 6.52a1.25 1.25 0 0 0-2.03-.98l-4.35 3.48c-.63.5-.63 1.46 0 1.96l4.35 3.48c.82.65 2.03.07 2.03-.98z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.72 7.54a1.25 1.25 0 0 1 2.03.98v6.96a1.25 1.25 0 0 1-2.03.98l-4.35-3.48a1.25 1.25 0 0 1 0-1.96z" />
    </IconBase>
  ))
);

ChevronFullSquareLeftFillDuotone.displayName = 'ChevronFullSquareLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullSquareLeftFillDuotone, ChevronFullSquareLeftFillDuotone as ChevronFullSquareLeftFillDuotoneIcon, ChevronFullSquareLeftFillDuotone as SiChevronFullSquareLeftFillDuotone };
export default ChevronFullSquareLeftFillDuotone;
export type { ChevronFullSquareLeftFillDuotoneProps };
