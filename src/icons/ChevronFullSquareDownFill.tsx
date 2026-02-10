import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullSquareDownFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullSquareDownFill = memo(
  forwardRef<SVGSVGElement, ChevronFullSquareDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-square-down-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 3q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q2.98 14.05 3 12q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q9.95 2.98 12 3M9.01 9.25a1.25 1.25 0 0 0-.99 2.02l3 3.84c.5.64 1.47.64 1.97 0l2.99-3.84c.63-.82.05-2.02-1-2.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullSquareDownFill.displayName = 'ChevronFullSquareDownFill';

// Triple export pattern (lucide-react style)
export { ChevronFullSquareDownFill, ChevronFullSquareDownFill as ChevronFullSquareDownFillIcon, ChevronFullSquareDownFill as SiChevronFullSquareDownFill };
export default ChevronFullSquareDownFill;
export type { ChevronFullSquareDownFillProps };
