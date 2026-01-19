import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullSquareUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullSquareUpFill = memo(
  forwardRef<SVGSVGElement, ChevronFullSquareUpFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-square-up-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-.02 6.37a1.25 1.25 0 0 0-1.96 0l-3.48 4.35c-.65.82-.07 2.03.98 2.03h6.96c1.05 0 1.63-1.21.98-2.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullSquareUpFill.displayName = 'ChevronFullSquareUpFill';

// Triple export pattern (lucide-react style)
export { ChevronFullSquareUpFill, ChevronFullSquareUpFill as ChevronFullSquareUpFillIcon, ChevronFullSquareUpFill as SiChevronFullSquareUpFill };
export default ChevronFullSquareUpFill;
export type { ChevronFullSquareUpFillProps };
