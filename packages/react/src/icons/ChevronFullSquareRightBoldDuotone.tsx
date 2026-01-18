import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullSquareRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullSquareRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullSquareRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-2 2c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38a4 4 0 0 0-1.74 1.74c-.2.37-.31.85-.38 1.62C4 8.58 4 9.58 4 11v2c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62a4 4 0 0 0 1.74 1.74c.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h2c1.42 0 2.42 0 3.2-.06a4 4 0 0 0 1.62-.38 4 4 0 0 0 1.74-1.74c.2-.37.31-.85.38-1.62.06-.78.06-1.78.06-3.2v-2c0-1.42 0-2.42-.06-3.2a4 4 0 0 0-.38-1.62 4 4 0 0 0-1.74-1.74c-.37-.2-.85-.31-1.62-.38C15.42 4 14.42 4 13 4z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9.25 8.52a1.25 1.25 0 0 1 2.03-.98l4.35 3.48c.63.5.63 1.46 0 1.96l-4.35 3.48c-.82.65-2.03.07-2.03-.98z" />
    </IconBase>
  ))
);

ChevronFullSquareRightBoldDuotone.displayName = 'ChevronFullSquareRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullSquareRightBoldDuotone, ChevronFullSquareRightBoldDuotone as ChevronFullSquareRightBoldDuotoneIcon, ChevronFullSquareRightBoldDuotone as SiChevronFullSquareRightBoldDuotone };
export type { ChevronFullSquareRightBoldDuotoneProps };
